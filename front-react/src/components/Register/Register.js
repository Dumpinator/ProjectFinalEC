import React from 'react'
import { useFormik } from 'formik'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'
import './Register.css'

function Register() {
    let history = useHistory();
    
    const initialValues = {
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    const onSubmit = values => {
        console.log('Form data', values);
        axios.post('http://127.0.0.1:8000/api/register', values)
            .then(res => {
                //console.log('POST Réussi');
                console.log(res.data)
                history.push("/dashboard");
            })
            .catch(err => {
                console.log(err.response.message)
                /*
                if(err.response.status === 401) {
                    formik.setErrors({ server_error : err.response.data.errors })
                }
                */
            })
    }

    const validate = values => {
        let errors = {}
        
        if(!values.name) {
            errors.name = 'Required'
        }
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
        if(!values.confirmPassword) {
            errors.confirmPassword = 'Required'
        } else if (values.confirmPassword !== values.password)
            errors.confirmPassword = 'Confirm your password with same'

        return errors
    }
    
    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    })

    return (
        <>
            <div className="page-register">
                <div className="register">
                    <form onSubmit={formik.handleSubmit}>
                        <h2 className="text-center mt-5">REGISTER</h2>
                        <div className="form-group">
                            <label htmlFor="inputName"></label>
                            <input  type="text"
                                className="form-control" 
                                name='name' 
                                id="inputName" 
                                aria-describedby="nameHelp" 
                                placeholder="Enter name"
                                onChange={formik.handleChange}
                                value={formik.values.name}
                            />
                            { formik.errors.name ? <div className="invalid-feedback d-block">{ formik.errors.name }</div> : null }
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputEmail"></label>
                            <input type="email" 
                                className="form-control"
                                name='email'
                                id="inputEmail"
                                aria-describedby="emailHelp"
                                placeholder="Enter email"
                                onChange={formik.handleChange}
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
                                onChange={formik.handleChange}
                                value={formik.values.password}
                            />
                            { formik.errors.password ? <div className="invalid-feedback d-block">{ formik.errors.password }</div> : null }
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputConfirmPassword"></label>
                            <input type="password"
                                className="form-control"
                                name='confirmPassword'
                                id="inputConfirmPassword"
                                placeholder="Confirm password"
                                onChange={formik.handleChange}
                                value={formik.values.confirmPassword}
                            />
                            { formik.errors.confirmPassword ? <div className="invalid-feedback d-block">{ formik.errors.confirmPassword }</div> : null }
                        </div>
                        { formik.errors.server_error ? <div className="alert alert-warning">{ formik.errors.server_error }</div> : null }
                        <button type="submit" className="btn btn-primary">Register</button>
                        <p><Link to="/login">Go to Login</Link></p>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register