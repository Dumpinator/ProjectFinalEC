import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import FormList from './FormList/FormList'
import './Form.css'

function Form() {

    const [questions, ] = useState([
        {
            id: 1,
            type: 'b',
            text: 'Votre adresse mail'
        },
        {
            id: 2,
            type: 'b',
            text: 'Votre âge'
        },
        {
            id: 3,
            type: 'a',
            text: 'Votre sexe',
            multipleChoice: ['Homme','Femme','Préfère de pas répondre']
        },
        {
            id: 4,
            type: 'c',
            text: 'Nombre de personne dans votre foyer (adulte & enfants)',
            multipleChoice: [1,2,3,4,5]
        },
        {
            id: 5,
            type: 'b',
            text: 'Votre profession'
        },
        {
            id: 6,
            type: 'a',
            text: 'Quel marque de casque VR utilisez vous ?',
            multipleChoice: ['Occulus Rift/s','HTC Vive','Windows Mixed Reality','PSVR']
        },
        {
            id: 7,
            type: 'a',
            text: 'Sur quel magasin d’application achetez vous des contenus VR ?',
            multipleChoice: ['SteamVR','Occulus store','Viveport','Playstation VR', 'Google play', 'Windows store']
        },
        {
            id: 8,
            type: 'a',
            text: 'Quel casque envisagez vous d’acheter dans un futur proche ?',
            multipleChoice: ['Occulus Quest','Occulus Go','HTC Vive Pro','PSVR','Autre','Aucun']
        },
        {
            id: 9,
            type: 'c',
            text: 'Au sein de votre foyer, combien de personne utilisent votre casque VR pour regarder Bigscreen ?',
            multipleChoice: [1,2,3,4,5]
        },
        {
            id: 10,
            type: 'a',
            text: 'Vous utilisez principalement Bigscreen pour : ',
            multipleChoice: ['regarder des émissions TV en direct','regarder des films','jouer en solo','jouer en team']
        },
        {
            id: 11,
            type: 'c',
            text: 'Combien donnez vous de point pour la qualité de l’image sur Bigscreen ?',
            multipleChoice: [1,2,3,4,5]
        },
        {
            id: 12,
            type: 'c',
            text: 'Combien donnez vous de point pour le confort d’utilisation de l’interface Bigscreen ?',
            multipleChoice: [1,2,3,4,5]
        },
        {
            id: 13,
            type: 'c',
            text: 'Combien donnez vous de point pour la connection réseau de Bigscreen ?',
            multipleChoice: [1,2,3,4,5]
        },
        {
            id: 14,
            type: 'c',
            text: 'Combien donnez vous de point pour la qualité des graphismes 3D dans Bigscreen ?',
            multipleChoice: [1,2,3,4,5]
        },
        {
            id: 15,
            type: 'c',
            text: 'Combien donnez vous de point pour la qualité audio dans Bigscreen ?',
            multipleChoice: [1,2,3,4,5]
        },
        {
            id: 16,
            type: 'a',
            text: 'Aimeriez vous avoir des notifications plus précises au cours de vos sessions Bigscreen ?',
            multipleChoice: ['oui','non']
        },
        {
            id: 17,
            type: 'a',
            text: 'Aimeriez vous pouvoir inviter un ami à rejoindre votre session via son smartphone ?',
            multipleChoice: ['oui','non']
        },
        {
            id: 18,
            type: 'c',
            text: 'Aimeriez vous pouvoir enregistrer des émissions TV pour pouvoir les regarder ultérieurement ?',
            multipleChoice: [1,2,3,4,5]
        },
        {
            id: 19,
            type: 'c',
            text: 'Aimeriez vous jouer à des jeux exclusifs sur votre Bigscreen ?',
            multipleChoice: [1,2,3,4,5]
        },
        {
            id: 20,
            type: 'b',
            text: 'Quelle nouvelle fonctionnalité de vos rêve devrait exister sur Bigscreen ?',
        }
    ]);

    return (
        <>
            <Navbar/>
            <FormList questions={questions}/>
        </>
    )
    
}

export default Form