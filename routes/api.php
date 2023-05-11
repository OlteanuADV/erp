<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ExamStageController;
use App\Http\Controllers\NotificationController;
use App\Http\Controllers\PushSubscriptionController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::group(['middleware' => 'api'], function () {
    Route::post('/otp', [AuthController::class, 'getOtp']);
    Route::post('/verify-otp', [AuthController::class, 'verifyOtp']);

    Route::group(['prefix' => 'auth'], function() {
        Route::get('/facebook/redirect', [AuthController::class, 'redirectToFacebook']);
        Route::get('/google/redirect', [AuthController::class, 'redirectToGoogle']);
        Route::Get('/facebook/callback', [AuthController::class, 'handleFacebookCallback']);
        Route::Get('/google/callback', [AuthController::class, 'handleGoogleCallback']);
    });

    Route::group(['prefix' => 'admin'], function() {
        Route::group(['prefix' => 'stage'], function() {
            Route::post('/add', [ExamStageController::class, 'add']);
            Route::get('/get/all', [ExamStageController::class, 'get']);
            Route::get('/get/{id}', [ExamStageController::class, 'getById']);
        });
    });
});

Route::group(['middleware' => 'auth:sanctum'], function () {
    Route::post('subscriptions', [PushSubscriptionController::class, 'update']);
    Route::post('subscriptions/delete', [PushSubscriptionController::class, 'destroy']);

    Route::post('/notifications', [NotificationController::class, 'store']);

    Route::get('/logout', fn() => auth()->logout());
    Route::get('/user', fn() => auth()->user());
});
