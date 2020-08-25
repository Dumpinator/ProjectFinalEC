<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/foo', function() {
    return 'Hello World';
});

Route::get('/users', 'HomeController@getMethod');
Route::post('/users', 'HomeController@postMethod');

Route::post('/photos', 'PhotoController@store')->middleware('App\Http\Middleware\PhotoMiddleware');

Route::get('/env', function() {
    return response()->json([
        'connection' => env('DB_CONNECTION'),
        'host' => env('DB_HOST'),
        'port' => env('DB_PORT'),
        'database' => env('DB_DATABASE'),
        'username' => env('DB_USERNAME'),
        'password' => env('DB_PASSWORD'),
    ]);
});