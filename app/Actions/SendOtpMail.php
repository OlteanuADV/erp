<?php

namespace App\Actions;

use App\Mail\OtpMail;
use Illuminate\Support\Facades\Mail;
use Lorisleiva\Actions\Concerns\AsAction;

class SendOtpMail
{
    use AsAction;

    public function handle(string $email, string $otp)
    {
        Mail::to($email)->send(new OtpMail("Hello! <br> Your OTP code is $otp. Please make sure you use it in maximum 5 minutes, before expires."));
    }
}
