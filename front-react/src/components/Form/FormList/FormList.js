import React, { useState, useEffect } from 'react'
import QuestionFactory from '../QuestionFactory/QuestionFactory'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import './FormList.css'

function FormList() {

    let history = useHistory();

    const [form, setForm] = useState({})
    const [fetchData, setFetchData] = useState([])
    const [errors, setErrors] = useState([])
    
    const url = 'http://localhost:8000/api/form'

    useEffect(() => {

        const fetachData = async () => {
            axios.get(url)
                .then(res => {
                    console.log('LOG : ', res.data)
                    setFetchData(res.data)
                })
                .catch(err => console.log(err.response))

                //setFetchData(result.data)
            }
            fetachData()
        }, [url])

        const handleSubmit = event => {
        event.preventDefault()
        console.log('Form data', form)

            axios.post('http://127.0.0.1:8000/api/answers', form)
            .then(res => {
                console.log('POST Réussi')
                console.log(res.data)
                //localStorage.setItem('token', res.data.api_token)
                //history.push(`/success/${res.data.url}`)
            })
            .catch(err => {
                console.log(err.response);
                if(err.response.status === 401) {
                    //formik.setErrors({ server_error : err.response.data.errors })
                }
            })
    }

    const handleChangeValue = event => {
        if (event.target.id)
                setForm({ ...form, [event.target.id]: event.target.value })
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="form-div">
                { 
                    fetchData.map( (question, i) => 
                        <QuestionFactory
                            question={question}
                            handleChangeValue={handleChangeValue}
                            key={i}
                        /> 
                    )
                }
                <div className="text-center">
                    <button className="btn" type="submit">Envoyer le formulaire</button>
                </div>
            </form>
        </>
    )
}

export default FormList