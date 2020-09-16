<?php

namespace App\Http\Controllers;

use App\Form;
use App\User;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class FormController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $allForms = Form::all();
        return response()->json($allForms);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        /*
        $validator = Validator::make($request->all(), [
            '1' => ['required', 'string', 'email', 'unique:users'],
            '2' => ['required', 'string'],
            '3' => ['required', 'string'],
            '4' => ['required', 'string']
        ]);

        if($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 401);
        }
        */

        $user = User::create([
            'name' => Str::random(20),
            'email' => $request->input('1'),
            'password' => '123456789',
            'api_token' => Str::random(60)
        ]);

        $form = Form::create([
            '1' => $request->input('1'),
            '2' => $request->input('2'),
            '3' => $request->input('3'),
            '4' => $request->input('4'),
            'url' => Str::random(50),
            'user_id' => $user->getForm()
        ]);

        return response()->json($form);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
