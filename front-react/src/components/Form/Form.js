import React from 'react'
import FormList from './FormList/FormList'
import Navbar from '../../components/Navbar/Navbar'
import './Form.css'

function Form() {

    return (
        <>  
            <Navbar />
            <div className="container">
                <div className="jumbotron" style={{ backgroundColor: '#fff', margin: '2em' }}>
                    <h1 className="display-4">BIGSCREEN</h1>
                    <p className="lead">Merci de répondre à toutes les questions et de valider le formulaire en bas de la page.</p>
                    <FormList />
                </div>
            </div>
        </>
    )
}

export default Form