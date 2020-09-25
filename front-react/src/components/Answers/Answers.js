import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import AnswersFactory from './AnswersFactory/AnswersFactory'
import axios from 'axios'
import Navbar from '../Navbar/Navbar'
import './Answers.css'

function Answers() {

    const [fetchData, setFetchData] = useState([])
    const [userData, setUserData] = useState([])

    let { url } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            axios.get(`http://localhost:8000/api/form`)
                .then(res => {
                    console.log('Form : ', res.data)
                    setFetchData(res.data)
                })
                .catch(err => console.log(err.response))
        }
        const fetchUserData = async () => {
            axios.get(`http://localhost:8000/api/answers/${url}`)
                .then(res => {
                    console.log('User Data : ', res.data)
                    setUserData(res.data)
                })
                .catch(err => console.log(err.response))
        }
        fetchData()
        fetchUserData()
    }, [url])

    return (
        <>
            <Navbar/>
            <div className="container">
                <div className="jumbotron" style={{ backgroundColor: '#fff', margin: '2em' }}>
                    <h1 className="display-4">Vos réponses</h1>
                        <div className="answers-content">
                            {   fetchData.map((questions, i) =>
                                <AnswersFactory
                                    question={questions}
                                    answer={userData}
                                    key={i}
                                />)
                            }
                    </div>
                </div>
            </div>
        </>
    )
}




export default Answers