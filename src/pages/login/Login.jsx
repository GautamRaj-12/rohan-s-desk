import React from 'react';
import './login.css';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className='login-container'>
      <h1>Login</h1>
      <form>
        <div className='mb-3'>
          <label for='exampleInputEmail1' className='form-label'>
            Email address
          </label>
          <input
            type='email'
            className='form-control'
            id='exampleInputEmail1'
            aria-describedby='emailHelp'
          />
        </div>
        <div className='mb-3'>
          <label for='exampleInputPassword1' className='form-label'>
            Password
          </label>
          <input
            type='password'
            className='form-control'
            id='exampleInputPassword1'
          />
        </div>
        <button className='btn btn-success'>Login</button>
      </form>
      <Link to='/register' className='btn btn-dark register-button'>
        {' '}
        Register If new user
      </Link>
    </div>
  );
}

export default Login;
