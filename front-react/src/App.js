import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from './components/Home/Home'
import Form from './components/Form/Form'
import Answers from './components/Answers/Answers'
import Register from './components/Register/Register'
import Dashboard from './components/Dashboard/Dashboard'
import Success from './components/Success/Success'
import Login from './components/Login/Login'

function App() {

  return (
    <div className="App">
        <Router>
            <div className="container w-50">
              <Switch>
                <Route exact path="/" component={ Home } />
                <Route path="/form" component={ Form } />
                <Route exact path="/answers/:url" component={ Answers } />
                <Route exact path="/success/:url" component={ Success } />
                <Route path="/register" component={ Register } />
                <Route path="/login" component={ Login } />
                <Route path="/dashboard" component={ Dashboard } />
                <Route render={() => <h1>404: page not found</h1>} />
              </Switch>
            </div>
        </Router>
    </div>
  )
}

export default App