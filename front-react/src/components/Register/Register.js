import React from 'react'
import { useFormik } from 'formik'
import { Link, Redirect, useHistory } from 'react-router-dom'
import axios from 'axios'

function Register() {
    let history = useHistory();

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
        onSubmit: values => {
            console.log('Register');
            console.log('Form data', values);
            axios.post('http://127.0.0.1:8000/api/register', values)
                .then(res => {
                    console.log(res.data)
                    localStorage.setItem('token', res.data.api_token)
                    history.push("/");

                })
                .catch(err => {
                    console.log(err.response);
                })
        }
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <h2 className="text-center mt-5">Register</h2>
            <div className="form-group">
                <label htmlFor="inputName">Name</label>
                <input  type="text"
                    className="form-control" 
                    name='name' 
                    id="inputName" 
                    aria-describedby="nameHelp" 
                    placeholder="Enter name"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                />
            </div>
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
            <div className="form-group">
                <label htmlFor="inputConfirmPassword">Confirm password</label>
                <input type="password"
                    className="form-control"
                    name='confirmPassword'
                    id="inputConfirmPassword"
                    placeholder="Confirm password"
                    onChange={formik.handleChange}
                    value={formik.values.confirmPassword}
                />
            </div>
            <button type="submit" className="btn btn-primary">Register</button>
            <p><Link to="/login">Go to Login</Link></p>
        </form>
    )
    
}

export default Register