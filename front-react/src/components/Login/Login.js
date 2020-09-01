import React from 'react'
import { useFormik } from 'formik'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'


function Login() {
    let history = useHistory();

    const initialValues = {
        email: '',
        password: ''
    }

    const onSubmit = values => {
        console.log('Form data', values)
        axios.post('http://127.0.0.1:8000/api/login', values)
            .then(res => {
                //console.log('Connexion Réussi');
                //console.log(res.data)
                localStorage.setItem('token', res.data.api_token)
                history.push("/dashboard")
            })
            .catch(err => {
                //console.log(err.response.data.errors);
                if(err.response.status === 401) {
                    formik.setErrors({ server_error : err.response.data.errors })
                }
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
        <form onSubmit={formik.handleSubmit} noValidate>
            <h2 className="text-center mt-5">Login</h2>
            <div className="form-group">
                <label htmlFor="inputEmail">Email address</label>
                <input type="email" 
                    className="form-control"
                    name='email'
                    id="inputEmail"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    onChange={ formik.handleChange }
                    value={formik.values.email}
                />
                { formik.errors.email ? <div className="invalid-feedback d-block">{ formik.errors.email }</div> : null }
            </div>
            <div className="form-group">
                <label htmlFor="inputPassword">Password</label>
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
                <button type="submit" className="btn btn-primary">Login</button>
                <p><Link to="/register">Go to Register</Link></p>
        </form>
    )
}

export default Login