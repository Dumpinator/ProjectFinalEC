import React from 'react'
import { Link, Switch, Route } from "react-router-dom"
import Navbar from '../Navbar/Navbar'
import Form from './Form/Form'
import Chart from './Chart/Chart'
import AnswerForm from './AnswerForm/AnswerForm'
import { FcPieChart, FcSurvey, FcAcceptDatabase } from 'react-icons/fc';
import './Dashboard.css'

function Dashboard() {

    return (
        <>
            <Navbar/>
            <div>
                <header className="page-header">
                    <nav>
                        <h3>Bigscreen</h3>
                        <button className="toggle-mob-menu" aria-expanded="false" aria-label="open menu">
                        </button>
                        <ul className="admin-menu">
                            <li className="menu-heading">
                                <h3>Admin</h3>
                            </li>
                            <li>
                                <Link to="/dashboard/chart">
                                    <FcPieChart />
                                    <span>Accueil</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/dashboard/form">
                                    <FcSurvey />
                                    <span>Questionnaire</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/dashboard/answers">
                                    <FcAcceptDatabase />
                                    <span>Réponses</span>
                                </Link>
                            </li>
                            <li>
                                <button className="collapse-btn" aria-expanded="true" aria-label="collapse menu">
                                </button>
                            </li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    <Route path="/dashboard/chart" component={Chart} />
                    <Route path="/dashboard/form" component={Form} />
                    <Route path="/dashboard/answers" component={AnswerForm} />
                </Switch>
            </div>
        </>
    )
}

export default Dashboard