<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */
use App\Answer;
use Illuminate\Support\Str;
use Faker\Generator as Faker;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(Answer::class, function (Faker $faker) {
    return [
        '1' => $faker->unique()->safeEmail,
        '2' => $faker->numberBetween($min = 18, $max = 99),
        '3' => $faker->randomElements($array = array('Homme','Femme','Préfère ne pas répondre')),
        '4' => $faker->randomElements($array = array('0','1','2','3','4','5')),
        '5' => $faker->name,
        '6' => $faker->randomElements($array = array('Occulus Rift/s','HTC Vive','Windows Mixed Reality','PSVR')),
        '7' => $faker->randomElements($array = array('SteamVR','Occulus store','Viveport','Playstation VR','Google Play', 'Windows store')),
        '8' => $faker->randomElements($array = array('Occulus Quest','Occulus Go','HTC Vive Pro')),
        '9' => $faker->randomElements($array = array('1','2','3','4','5')),
        '10' => $faker->randomElements($array = array('Regarder des émissions TV en direct','Regarder des films','Jouer en solo','Jouer en team')),
        '11' => $faker->randomElements($array = array('0','1','2','3','4','5')),
        '12' => $faker->randomElements($array = array('0','1','2','3','4','5')),
        '13' => $faker->randomElements($array = array('0','1','2','3','4','5')),
        '14' => $faker->randomElements($array = array('0','1','2','3','4','5')),
        '15' => $faker->randomElements($array = array('0','1','2','3','4','5')),
        '16' => $faker->randomElements($array = array('Oui','Non')),
        '17' => $faker->randomElements($array = array('Oui','Non')),
        '18' => $faker->randomElements($array = array('1','2','3','4','5')),
        '19' => $faker->randomElements($array = array('1','2','3','4','5')),
        '20' => $faker->name,
        'user_id' => $faker->numberBetween($min = 18, $max = 99),
        'user_url' => $faker->unique()->lexify('????????????????????'),
    ];
});
