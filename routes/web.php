<?php

use Illuminate\Support\Facades\Route;
Route::get('manifest.json', function () {
    return [
        'name' => config('app.name'),
        'gcm_sender_id' => config('webpush.gcm.sender_id'),
    ];
});
Route::get('/login', function () {
    return view('app');
})->name('login');
Route::any('{all}', function () {
    return view('app');
})->where(['all' => '.*']);