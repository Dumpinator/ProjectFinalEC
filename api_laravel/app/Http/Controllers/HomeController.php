<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function getMethod() {
        return response()->json(['success' => 'Méthode GET']);
    }

    public function postMethod(Request $req) {
        return $req->all();
    }
}
