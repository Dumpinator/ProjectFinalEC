import React from 'react'
import { useFormik } from 'formik'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'
import Navbar from '../../components/Navbar/Navbar'
import './Login.css'

function Login() {

    let history = useHistory()

    const initialValues = {
        email: '',
        password: ''
    }

    const onSubmit = values => {
        //console.log('Form data', values)
        axios.post('http://127.0.0.1:8000/api/login', values)
            .then(res => {
                localStorage.setItem('token', res.data.remember_token)
                history.push("/dashboard/chart")
            })
            .catch(err => {
                //console.log(err.response.data.errors);
                formik.setErrors({ server_error : err.response.data.errors })
            })
    }

    const validate = values => {
        let errors = {}
    
        if(!values.email) {
            errors.email = 'Required'
        }
        if(!values.email) {
            errors.email = 'Required'
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/i.test(values.email)) {
            errors.email = 'Invalid email format'
        }
        if(!values.password) {
            errors.password = 'Required'
        }
        return errors
    }

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    })

    return (
        <>
            <Navbar />
            <div className="page-login">
                <div className="login">
                    <form onSubmit={formik.handleSubmit} noValidate>
                        <h2>LOGIN</h2>
                        <div className="form-group">
                            <label htmlFor="inputEmail"></label>
                            <input type="email" 
                                className="form-control"
                                name='email'
                                id="inputEmail"
                                aria-describedby="emailHelp"
                                placeholder="Email"
                                onChange={ formik.handleChange }
                                value={formik.values.email}
                            />
                            { formik.errors.email ? <div className="invalid-feedback d-block">{ formik.errors.email }</div> : null }
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputPassword"></label>
                            <input type="password"
                                className="form-control"
                                name='password'
                                id="inputPassword"
                                placeholder="Password"
                                onChange={ formik.handleChange }
                                value={ formik.values.password }
                            />
                            { formik.errors.password ? <div className="invalid-feedback d-block">{ formik.errors.password }</div> : null }
                        </div>
                            { formik.errors.server_error ? <div className="alert alert-warning">{ formik.errors.server_error }</div> : null }
                            <button type="submit" className="btn btn-primary">Enter</button>
                            <p><Link to="/register">Go to Register</Link></p>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login