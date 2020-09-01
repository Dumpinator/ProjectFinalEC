import React from 'react'
import { Link } from "react-router-dom"
import Navbar from '../Navbar/Navbar'
import './Dashboard.css'

function Dashboard() {

    return (
        <>
            <Navbar/>
            <div className="jumbotron">
                <h1 className="display-4">DASHBOARD</h1>
                <Link className="btn btn-primary btn-lg" to="#" role="button">Learn more</Link>
            </div>
        </>
    )
}

export default Dashboard