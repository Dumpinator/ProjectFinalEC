import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import Welcome from './components/Welcome/Welcome'
//import Car from './components/Car/Car'
import Form from './components/Form/Form'
import Photos from './components/Photos/Photos'

function App() {
  return (
    <div className="App">
        <Router>
          
          <div>
            <nav>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/photos">Photos</Link></li>
                <li><Link to="/form">Form</Link></li>
              </ul>
            </nav>
            <Switch>
              <Route exact path="/" component={ Welcome } />
              <Route path="/photos" component={ Photos } />
              <Route path="/form" component={ Form } />
            </Switch>
          </div>

        </Router>
    </div>
  )
}

export default App