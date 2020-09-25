import React from 'react'
import { Link, useParams } from "react-router-dom"
import Navbar from '../Navbar/Navbar'
import './Success.css'

function Success() {

    const { url } = useParams()

    return (
        <>
            <Navbar/>
            <div className="container-fluid d-flex h-100">
                <div className="container d-flex h-100">
                    <div className="row align-self-center w-100">
                        <div className="col-6 mx-auto">
                            <div className="jumbotron mt-4">
                                <h1 className="display-4">SUCCESS</h1>
                                <p className="lead">
                                    Toute l’équipe de ​Bigscreen v​ous remercie pour votre engagement. Grâce à votre investissement, nous vous préparons une application toujours plus facile à utiliser, seul ou en famille.
                                    vous désirez consulter vos réponse ultérieurement, vous pouvez consultez cette adresse:
                                </p>
                                <p className="lead">
                                    <Link className="btn btn-primary btn-lg" to={`/answers/${url}`} role="button">Lien</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Success