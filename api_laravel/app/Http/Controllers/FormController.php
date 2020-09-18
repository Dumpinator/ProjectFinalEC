<?php

namespace App\Http\Controllers;

use App\Form;
use App\User;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;

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

    public function success()
    {
        //
        //$form = DB::table('forms')->where('url', $user->email)->first();
        $allForms = Form::all();
        return response()->json($allForms);
    }

    public function answers($url)
    {

        $result = DB::table('forms')->where('url', $url)->first();
        return response()->json($result);

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

    public function checkEmailUser(Request $request)
    {
        $email = $request->input('1');
        if( strlen( $email ) > 0 ) {
            $userResult = DB::table('users')->where('email', $email)->first();
            if ( is_object($userResult) && !is_null($userResult) ) {
                return response()->json($userResult, 200);
            } else {
                return response()->json(['errors' => 'Email No Exist'], 404);
            }
        }
        return response()->json(['errors' => 'Merci de rentré un email valide'], 404);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        
        $email = $request->input('1');

        if( strlen( $email ) > 0 ) {

            // check si l'email existe bien en base
            $userExist = DB::table('users')->where('email', $email)->first();

            if ( is_object($userExist) && !is_null($userExist) ) {
                
                $form = Form::create([

                    '1' => $userExist->email,
                    '2' => $request->input('2'),
                    '3' => $request->input('3'),
                    '4' => $request->input('4'),
                    '5' => $request->input('5'),
                    '6' => $request->input('6'),
                    '7' => $request->input('7'),
                    '8' => $request->input('8'),
                    '9' => $request->input('9'),
                    '10' => $request->input('10'),
                    '11' => $request->input('11'),
                    '12' => $request->input('12'),
                    '13' => $request->input('13'),
                    '14' => $request->input('14'),
                    '15' => $request->input('15'),
                    '16' => $request->input('16'),
                    '17' => $request->input('17'),
                    '18' => $request->input('18'),
                    '19' => $request->input('19'),
                    '20' => $request->input('20'),
                    'url' => $userExist->api_token,
                    'user_id' => $userExist->id
                ]);

                return response()->json([$form, $userExist], 200);
            } else {
                return response()->json(['errors' => 'Email No Exist'], 404);
            }
        }
        return response()->json(['errors' => 'Plz add a valid email'], 404);

        /*
        $validator = Validator::make($request->all(), [
            '1' => ['required', 'string', 'email'],
            '2' => ['required', 'string'],
            '3' => ['required', 'string'],
            '4' => ['required', 'string']
        ]);

        if($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 401);
        }
        */
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $result = DB::table('forms')->where('user_id', $id)->first();
        return response()->json($result);
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
