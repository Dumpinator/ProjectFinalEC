import React from 'react'
import QuestionFactory from '../QuestionFactory/QuestionFactory'
import './FormList.css'

function FormList({ questions }) {

    return (
        <>
            <form className="test">
                { questions.map( (question, i) => <QuestionFactory question={question} key={i}/> )}
                <div className="text-center">
                    <button className="btn" type="submit">Envoyer le formulaire</button>
                </div>
            </form>
        </>
    )
}

export default FormList