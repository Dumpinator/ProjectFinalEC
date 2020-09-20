import React, { useState, useEffect } from 'react'
import QuestionFactory from '../QuestionFactory/QuestionFactory'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import './FormList.css'

function FormList() {

    let history = useHistory()

    const [form, setForm] = useState({})
    const [fetchData, setFetchData] = useState([])
    const [errors, setErrors] = useState(null)

    useEffect(() => {
        const fetachData = async () => {
            axios.get(`http://localhost:8000/api/form`)
                .then(res => {
                    //console.log('LOG : ', res.data)
                    setFetchData(res.data)
                })
                .catch(err => {
                    console.log(err.response)
                    //setErrors(err.response)
                })
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
                console.log('Error : ', err.response.data);
                setErrors(err.response.data)
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
                    { errors ? <p className="errors"> {errors.errors} </p> : null }
                    <button className="btn" type="submit">Envoyer le formulaire</button>
                </div>
            </form>
        </>
    )
}

export default FormList