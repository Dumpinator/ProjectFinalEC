import React from 'react'
import { Link, useParams } from "react-router-dom"
import Navbar from '../Navbar/Navbar'
import './Success.css'

function Success() {

    const { url } = useParams()

    return (
        <>
            <Navbar/>
            <div className="jumbotron">
                <h1 className="display-4">Success</h1>
                <p>
                    Toute l’équipe de ​Bigscreen v​ ous remercie pour votre engagement. Grâce à votre investissement, nous vous préparons une application toujours plus facile à utiliser, seul ou en famille.
                    vous désirez consulter vos réponse ultérieurement, vous pouvez consultez cette adresse: 
                </p>
                <Link className="btn btn-primary btn-lg" to={`/answers/${url}`} role="button">{`http://localhost:3000/answers/${url}`}</Link>
            </div>
        </>
    )
}

export default Success