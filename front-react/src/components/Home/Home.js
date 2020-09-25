import React from 'react'
import { Link } from 'react-router-dom'
import { BiTimer } from 'react-icons/bi'
import Navbar from '../../components/Navbar/Navbar'
import './Home.css'

function Home() {

    return (
        <>
            <Navbar />
            <div className="page-home">
                <div className="home">
                    <div className="jumbotron" style={{ backgroundColor: '#fff', margin: '2em'}}>
                        <h1 className="display-4">Bienvenue</h1>
                        <p className="lead">Vous avez été redirigé pour participer à l'enquête de Satisfaction Client de chez Bigscreen</p>
                        <hr className="my-4"/>
                        <div className="icon"><BiTimer /></div>
                        <p className="estimation">5 min</p>
                        <Link className="btn btn-primary btn-lg" to="/form" role="button">C'est parti</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home