<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Form extends Model
{
    protected $fillable = [
        '1','2','3','4',
        'url','user_id'
    ];

    public function getUser() {
        return $this->belongsTo('App\User');
    }
}
