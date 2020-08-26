import React from 'react'


class Form extends React.Component {



    email = event => {
        console.log('Email : ' + event.target.value );
    }

    render() {
        return (
            <form method="POST">
                <input type="text" name="question" placeholder="question" onChange={ this.email }></input>
                <input type="text" name="res" placeholder="réponse"></input>
                <button type="submit">Envoyez le formulaire</button>
            </form>
        )
    }
}

export default Form