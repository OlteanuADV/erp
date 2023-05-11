<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Notifications\HelloNotification;
use Illuminate\Http\Request;
use NotificationChannels\WebPush\PushSubscription;
//used https://github.com/cretueusebiu/laravel-web-push-demo

class NotificationController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth')->except('last', 'dismiss');
    }

    /**
     * Create a new notification.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $user = User::find(1);
        try {
            $user->notify(new HelloNotification);
        } catch (\Exception $e) {
            return response()->json($e->getMessage(), 500);
        }
        // $user->notify(new HelloNotification);

        return response()->json('Notification sent.', 201);
    }
}
