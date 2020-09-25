<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class AuthenticationController extends Controller
{
    public function register(Request $request) {
        
        $validator = Validator::make($request->all(), [
            'name' => ['required', 'string', 'max:25', 'min:4'],
            'email' => ['required', 'string', 'email' , 'max:150', 'min:3', 'unique:users'],
            'password' => ['required', 'string', 'min:8'],
            'confirmPassword' => ['required', 'same:password']
        ]);

        if($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 401);
        }
        
        $user = User::create([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'password' => bcrypt($request->input('password')),
            'url' => Str::random(60),
            'remember_token' => Str::random(60)
        ]);

        return response()->json($user);
    }

    public function login(Request $request) {

        $validator = Validator::make($request->all(), [
            'email' => ['required', 'string'],
            'password' => ['required', 'string']
        ]);

        if($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 401);
        }

        if(Auth::attempt(['email' => $request->input('email'),'password' => $request->input('password')])) {
            $user = User::where('email', $request->input('email'))->firstOrFail();
            if($user->user_types === 'admin')
                return response()->json($user);
            else
                return response()->json(['errors' => 'Only admin can connect !'], 401);
        } else {
            return response()->json(['errors' => 'Wrong ID !'], 401);
        }
    }
}