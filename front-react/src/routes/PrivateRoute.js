import React from 'react'
import { Redirect, Route } from 'react-router-dom'

// TODO check le token en BDD
const isAuthenticated = localStorage.getItem('token');

const PrivateRoute = ({ children, ...rest }) => {
    return (
        <Route
            {...rest}
            render={({ location }) =>
                isAuthenticated ? 
                (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                )
            }
        />
    )
}

export default PrivateRoute
