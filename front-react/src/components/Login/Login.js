import React from 'react'
import { useFormik } from 'formik'
import { Link } from 'react-router-dom'

function Login() {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: values => {
            console.log('Login');
            console.log('Form data', values);
        },
        validate: values => {

        }
    })

    return (
        <form method='POST' onSubmit={formik.handleSubmit}>
            <h2 className="text-center mt-5">Login</h2>
            <div className="form-group">
                <label htmlFor="inputEmail">Email address</label>
                <input type="email" 
                    className="form-control"
                    name='email'
                    id="inputEmail"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    onChange={formik.handleChange}
                    value={formik.values.email}/>
            </div>
            <div className="form-group">
                <label htmlFor="inputPassword">Password</label>
                <input type="password"
                    className="form-control"
                    name='password'
                    id="inputPassword"
                    placeholder="Password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />
            </div>
                <button type="submit" className="btn btn-primary">Login</button>
                <p><Link to="/register">Go to Register</Link></p>
        </form>
    )
    
}

export default Login