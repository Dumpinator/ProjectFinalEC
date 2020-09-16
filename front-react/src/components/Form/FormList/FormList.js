import React, { useState } from 'react'
import QuestionFactory from '../QuestionFactory/QuestionFactory'
//import { useHistory } from 'react-router-dom'
import axios from 'axios'
import './FormList.css'

function FormList({ questions }) {

    //let history = useHistory();

    const [form, setForm] = useState({})

    const handleSubmit = event => {
        event.preventDefault()
        console.log('Form data', form);
        
        axios.post('http://127.0.0.1:8000/api/forms', form)
            .then(res => {
                console.log('POST Réussi');
                console.log(res.data)
                localStorage.setItem('token', res.data.api_token)
                //history.push("/");
            })
            .catch(err => {
                console.log(err);
                /*
                if(err.response.status === 401) {
                    //formik.setErrors({ server_error : err.response.data.errors })
                }
                */
            })
    }

    /*
    useEffect( () => {
            console.log('update');
        }, [console.log("New state in ASYNC callback:", form)]
    )
    */
    const handleChangeValue = event => {
        if (event.target.id)
                setForm({ ...form, [event.target.id]: event.target.value })
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="form-div">
                { questions.map( (question, i) => 
                <QuestionFactory 
                        question={question}
                        handleChangeValue={handleChangeValue}
                        key={i}
                    /> )}
                <div className="text-center">
                    <button className="btn" type="submit">Envoyer le formulaire</button>
                </div>
            </form>
        </>
    )
}

export default FormList