<?php

use App\Form;
use Illuminate\Database\Seeder;

class Form1Seeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('forms')->insert([
            [
                'label' => 'Votre adresse mail',
                'type' => 'B',
                'option' => null
            ],
            [
                'label' => 'Votre âge',
                'type' => 'B',
                'option' => null
            ],
            [
                'label' => 'Votre sexe',
                'type' => 'A',
                'option' => 'Homme,Femme,Préfère ne pas répondre'
            ],
            [
                'label' => 'Nombre de personne dans votre foyer (adulte & enfants)',
                'type' => 'C',
                'option' => '0,1,2,3,4,5'
            ],
            [
                'label' => 'Votre profession',
                'type' => 'B',
                'option' => null
            ],
            [
                'label' => 'Quel marque de casque VR utilisez vous ?',
                'type' => 'A',
                'option' => 'Occulus Rift/s,HTC Vive,Windows Mixed Reality,PSVR'
            ],
            [
                'label' => 'Sur quel magasin d’application achetez vous des contenus VR ?',
                'type' => 'A',
                'option' => 'SteamVR,Occulus store,Viveport,Playstation VR,Google Play,Windows store'
            ],
            [
                'label' => 'Quel casque envisagez vous d’acheter dans un futur proche ?',
                'type' => 'A',
                'option' => 'Occulus Quest,Occulus Go,HTC Vive Pro'
            ],
            [
                'label' => 'Au sein de votre foyer, combien de personne utilisent votre casque VR pour regarder Bigscreen ?',
                'type' => 'C',
                'option' => '1,2,3,4,5'
            ],
            [
                'label' => 'Vous utilisez principalement Bigscreen pour :',
                'type' => 'A',
                'option' => 'Regarder des émissions TV en direct,Regarder des films,Jouer en solo,Jouer en team'
            ],
            [
                'label' => 'Combien donnez vous de point pour la qualité de l’image sur Bigscreen ?',
                'type' => 'C',
                'option' => '1,2,3,4,5'
            ],
            [
                'label' => 'Combien donnez vous de point pour le confort d’utilisation de l’interface Bigscreen ?',
                'type' => 'C',
                'option' => '1,2,3,4,5'
            ],
            [
                'label' => 'Combien donnez vous de point pour la connection réseau de Bigscreen ?',
                'type' => 'C',
                'option' => '1,2,3,4,5'
            ],
            [
                'label' => 'Combien donnez vous de point pour la qualité des graphismes 3D dans Bigscreen ?',
                'type' => 'C',
                'option' => '1,2,3,4,5'
            ],
            [
                'label' => 'Combien donnez vous de point pour la qualité audio dans Bigscreen ?',
                'type' => 'C',
                'option' => '1,2,3,4,5'
            ],
            [
                'label' => 'Aimeriez vous avoir des notifications plus précises au cours de vos sessions Bigscreen ?',
                'type' => 'A',
                'option' => 'Oui,Non'
            ],
            [
                'label' => 'Aimeriez vous pouvoir inviter un ami à rejoindre votre session via son smartphone ?',
                'type' => 'A',
                'option' => 'Oui,Non'
            ],
            [
                'label' => 'Aimeriez vous pouvoir enregistrer des émissions TV pour pouvoir les regarder ultérieurement ?',
                'type' => 'C',
                'option' => '1,2,3,4,5'
            ],
            [
                'label' => 'Aimeriez vous jouer à des jeux exclusifs sur votre Bigscreen ?',
                'type' => 'C',
                'option' => '1,2,3,4,5'
            ],
            [
                'label' => 'Quelle nouvelle fonctionnalité de vos rêve devrait exister sur Bigscreen ?',
                'type' => 'B',
                'option' => null
            ],
        ]);
    }
}
