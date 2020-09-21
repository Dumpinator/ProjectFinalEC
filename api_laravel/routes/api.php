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

//Route::get('/photos', 'PhotoController@index');
//Route::post('/photos', 'PhotoController@store')->middleware('App\Http\Middleware\PhotoMiddleware');

Route::post('/answers', 'AnswerController@store');
Route::get('/answers', 'AnswerController@index');
Route::get('/answers/{url}', 'AnswerController@show');

Route::get('/success/{url}', 'AnswerController@success');

Route::get('/form', 'Form1Controller@index');

// Test connection BDD (check MAMP is ON)
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

Route::post('/register', 'AuthenticationController@register');
Route::post('/login', 'AuthenticationController@login');
