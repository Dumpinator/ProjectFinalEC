import React, { useState } from 'react'
import { Link, useHistory } from "react-router-dom"

function Navbar() {

    let history = useHistory()
    const [, removeToken] = useState(false)
    const logout = () => {
        localStorage.clear()
        removeToken(true)
        history.push("/")
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">Bigscreen</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto mr-3">
                    {
                        localStorage.getItem('token')
                        ?
                        <>
                            <li className="nav-item active">
                                <button className="nav-btn" onClick={logout}>Déconnexion</button>
                            </li>
                        </>
                        :
                        <>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/form">Formulaire</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Connexion</Link>
                            </li>
                        </>
                    }
                </ul>
            </div>
        </nav>
    )
}

export default Navbar