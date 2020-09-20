<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Answer;
use Faker\Generator as Faker;

$factory->define(Answer::class, function (Faker $faker) {

    return [
        // ID autoincrement
        '1' => 'jojo@gmail.com',
        '2' => '25',
        '3' => 'Homme',
        '4' => '2',
        '5' => 'dev',
        '6' => 'HTC Vive',
        '7' => 'SteamVR',
        '8' => 'HTC Vive Pro',
        '9' => '3',
        '10' => 'Jouer en solo',
        '11' => '3',
        '12' => '4',
        '13' => '2',
        '14' => '3',
        '15' => '1',
        '16' => 'Non',
        '17' => 'Oui',
        '18' => '3',
        '19' => '4',
        '20' => 'zegrezger ergeggeg',
        'user_id' => 7,
        'user_url' => 'rezgergergetghetghettrher',
    ];
    
    //return [
        /*
        '1' => $faker->unique()->safeEmail,
        '2' => strval($faker->numberBetween($min = 18, $max = 99)),
        '3' => $faker->randomElement(['Homme','Femme','Préfère ne pas répondre']),
        '4' => $faker->randomElement(['0','1','2','3','4','5']),
        '5' => $faker->name,
        '6' => $faker->randomElement(['Occulus Rift/s','HTC Vive','Windows Mixed Reality','PSVR']),
        '7' => $faker->randomElement(['SteamVR','Occulus store','Viveport','Playstation VR','Google Play', 'Windows store']),
        '8' => $faker->randomElement(['Occulus Quest','Occulus Go','HTC Vive Pro']),
        '9' => $faker->randomElement(['1','2','3','4','5']),
        '10' => $faker->randomElement(['Regarder des émissions TV en direct','Regarder des films','Jouer en solo','Jouer en team']),
        '11' => $faker->randomElement(['1','2','3','4','5']),
        '12' => $faker->randomElement(['1','2','3','4','5']),
        '13' => $faker->randomElement(['1','2','3','4','5']),
        '14' => $faker->randomElement(['1','2','3','4','5']),
        '15' => $faker->randomElement(['1','2','3','4','5']),
        '16' => $faker->randomElement(['Oui','Non']),
        '17' => $faker->randomElement(['Oui','Non']),
        '18' => $faker->randomElement(['1','2','3','4','5']),
        '19' => $faker->randomElement(['1','2','3','4','5']),
        '20' => $faker->name,
        
        'user_id' => strval($faker->numberBetween($min = 18, $max = 99)),
        'user_url' => $faker->unique()->lexify('????????????????????'),
        */
    // ];
});