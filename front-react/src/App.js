import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from './components/Home/Home'
import Form from './components/Form/Form'
//import Photos from './components/Photos/Photos'
import Navbar from './components/Navbar/Navbar'
import Register from './components/Register/Register'
import Login from './components/Login/Login'

function App() {
  return (
    <div className="App">
        <Router>
            <Navbar/>
            <div className="container w-50">
              <Switch>
                <Route exact path="/" component={ Home } />
                <Route path="/form" component={ Form } />
                <Route path="/register" component={ Register } />
                <Route path="/login" component={ Login } />
              </Switch>
            </div>
        </Router>
    </div>
  )
}

export default App