import React, { useState, useEffect } from 'react'
import QuestionFactory from '../QuestionFactory/QuestionFactory'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import './FormList.css'

function FormList() {

    let history = useHistory()

    const [form, setForm] = useState({})
    const [fetchData, setFetchData] = useState([])
    const [errors, setErrors] = useState([])

    useEffect(() => {
        const fetachData = async () => {
            axios.get(`http://localhost:8000/api/form`)
                .then(res => {
                    //console.log('LOG : ', res.data)
                    setFetchData(res.data)
                })
                .catch(err => console.log(err.response))
        }
        fetachData()
    }, [])

        const handleSubmit = event => {
        event.preventDefault()
        console.log('Form data', form)
        axios.post('http://127.0.0.1:8000/api/answers', form)
        .then(res => {
            //console.log(res.data[1].url)
            localStorage.setItem('url', res.data[1].url)
            history.push(`/success/${res.data[1].url}`)
        })
        .catch(err => {
            console.log(err.response.data);
            if (err.response.data.message)
                setErrors({ server_error: 'Erreur MySQL'})
            else 
                setErrors({ server_error : err.response.data.errors })
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
                    { errors.server_error ? <div className="alert alert-warning">{errors.server_error}</div> : null }
                    <button className="btn btn-primary" type="submit">Envoyer</button>
                </div>
            </form>
        </>
    )
}

export default FormList