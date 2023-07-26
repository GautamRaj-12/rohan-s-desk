import React from 'react';
import { Link } from 'react-router-dom';
import ProfilePicture from '../../assets/profile-pic.png';
import '../navbar/navbar.css';

function NavBar() {
  const user = true;
  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark sticky-top navbar-custom'>
        <div className='container'>
          <div className='navbar-brand'>
            <a className='brand-link' href='/'>
              Rohan's Desk
            </a>
          </div>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div
            className='collapse navbar-collapse d-flex-row justify-content-evenly'
            id='navbarSupportedContent'
          >
            <ul className='navbar-nav'>
              <li className='navbar-item p-2'>
                <Link className='nav-link' id='hover-link' to='/'>
                  Home
                </Link>
              </li>
              <li className='navbar-item p-2'>
                <Link className='nav-link' to='/about'>
                  About
                </Link>
              </li>
              <li className='navbar-item p-2'>
                <Link className='nav-link' to='/contact'>
                  Contact
                </Link>
              </li>
              <li className='navbar-item p-2'>
                <Link className='nav-link' to='/write'>
                  Write
                </Link>
              </li>
              <li className='navbar-item p-2'>
                <Link className='nav-link'>{user && 'Logout'}</Link>
              </li>
            </ul>
            <div>
              {user ? (
                <img
                  src={ProfilePicture}
                  alt='The Author'
                  className='profilepicture mx-2'
                />
              ) : (
                <Link
                  className='text-white'
                  style={{ textDecoration: 'none', fontFamily: 'poppins' }}
                  to='/login'
                >
                  Login
                </Link>
              )}

              <i className='fa-solid fa-magnifying-glass search-button mx-3'></i>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
