import React from 'react'
import { Link } from "react-router-dom"

function Navbar() {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">Bigscreen</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto mr-3">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/form">Formulaire</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/register">Connection</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
    
}

export default Navbar