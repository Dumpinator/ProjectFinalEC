import React from 'react'


function Form() {

    const email = event => {
        console.log('Email : ' + event.target.value );
    }

    return (
        <form method="POST">
            <input type="text" name="question" placeholder="question" onChange={ email }></input>
            <input type="text" name="res" placeholder="réponse"></input>
            <button type="submit">Envoyez le formulaire</button>
        </form>
    )
    
}

export default Form