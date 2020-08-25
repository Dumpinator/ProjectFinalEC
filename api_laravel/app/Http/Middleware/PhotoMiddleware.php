<?php

namespace App\Http\Middleware;

use Closure;

class PhotoMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if( !$request->header('JWT') ) {
            //return response()->json('Veuillez vous connecter !');
            return response()->json(['Erreur' => 'Veuillez vous connecter !']);
        }
        return $next($request);
    }
}
