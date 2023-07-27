import './login.css';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className='login-container'>
      <h1>Login</h1>
      <form>
        <div className='mb-3'>
          <label for='username' className='form-label'>
            Username
          </label>
          <input type='text' className='form-control' id='username' />
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
