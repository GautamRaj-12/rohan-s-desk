import { useContext, useRef } from 'react';
import './login.css';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import axios from 'axios';

function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { user, dispatch, isFetching } = useContext(Context);
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: 'LOGIN_START' });
    try {
      const res = await axios.post('/auth/login', {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
    } catch (err) {
      dispatch({ type: 'LOGIN_FAILURE' });
    }
  };

  console.log(user);
  return (
    <div className='login-container'>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label htmlFor='username' className='form-label'>
            Username
          </label>
          <input
            type='text'
            className='form-control'
            id='username'
            ref={userRef}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='exampleInputPassword1' className='form-label'>
            Password
          </label>
          <input
            type='password'
            className='form-control'
            id='exampleInputPassword1'
            ref={passwordRef}
          />
        </div>
        <button type='submit' className='btn btn-success disabled-btn'>
          Login
        </button>
      </form>
      <Link to='/register' className='btn btn-dark register-button'>
        {' '}
        Register If new user
      </Link>
    </div>
  );
}

export default Login;
