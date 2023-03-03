import React from 'react'
import './register.css'
import { Link } from 'react-router-dom'

function Register() {
    return (
        <div className="register-container">
            <h1>Register</h1>
            <form>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />

                </div>
                <button className="btn btn-success">Register</button>
            </form>
            <Link to="/login" className="btn btn-dark login-button"> Login If existing user</Link>
        </div>
    )
}

export default Register
