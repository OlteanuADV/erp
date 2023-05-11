<?php

namespace App\Http\Controllers;

use App\Http\Requests\GetOtpRequest;
use App\Http\Requests\VerifyOtpRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Laravel\Socialite\Facades\Socialite;

class AuthController extends Controller
{
    public function getOtp(GetOtpRequest $request)
    {
        $validated = $request->validated();
        $email = $validated['email'];

        $user = User::firstOrCreate(['email' => $email]);
        $user->sendOtp();
        return response()->json(['message' => 'OTP sent to your email']);
    }

    public function verifyOtp(VerifyOtpRequest $request)
    {
        $validated = $request->validated();
        $email = $validated['email'];
        $otp = $validated['otp'];

        $user = User::where('email', $email)->first();
        $userOtp = $user->otp;

        if (!is_null($userOtp)) {
            if ($userOtp->otp !== $otp) {
                return response()->json(['message' => 'Invalid OTP.'], 400);
            }
            
            if (strtotime($userOtp->expires_at) < time()) {
                $user->sendOtp();
                return response()->json(['message' => 'OTP expired, a new one was send on ' . $user->email . '.'], 400);
            }

            if ($userOtp->is_verified) {
                $user->sendOtp();
                return response()->json(['message' => 'OTP already verified, a new one was send on ' . $user->email . '.'], 400);
            }
        }
        $user->otp()->update([
            'is_verified' => true,
            'verified_at' => now(),
        ]);

        $user->tokens()->delete();
        $token = $user->createToken('auth_token')->plainTextToken;
        return response()->json(['token' => $token]);
    }

    public function redirectToFacebook()
    {
        return Socialite::driver('facebook')->redirect();
    }

    public function handleFacebookCallback()
    {
        $facebookUser = Socialite::driver('facebook')->user();
        
        $user = User::firstOrCreate([
            'email' => $facebookUser->getEmail(),
        ], [
            'name' => $facebookUser->getName(),
            'facebook_id' => $facebookUser->getId(),
        ]);

        if($user->facebook_id !== $facebookUser->getId())
        {
            $user->facebook_id = $facebookUser->getId();
            $user->save();
        }

        return view('app')->with(['token' => $user->createToken('auth_token')->plainTextToken, 'user' => $user]);
    }

    public function redirectToGoogle()
    {
        return Socialite::driver('google')->redirect();
    }

    public function handleGoogleCallback()
    {
        $googleUser = Socialite::driver('google')->user();
        
        $user = User::firstOrCreate([
            'email' => $googleUser->getEmail(),
        ], [
            'name' => $googleUser->getName(),
            'google_id' => $googleUser->getId(),
        ]);

        if($user->google_id !== $googleUser->getId())
        {
            $user->google_id = $googleUser->getId();
            $user->save();
        }

        return view('app')->with(['token' => $user->createToken('auth_token')->plainTextToken, 'user' => $user]);
    }
}
