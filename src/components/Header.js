import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../images/Logodraft.png';
import {FaInstagram , FaFacebook } from "react-icons/fa";

const Header = () => {
  return (
    <header>
    <div className='header-upper'>
      <div className="header-left">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            {/* <i className="fa fa-instagram" aria-hidden="true"></i> */}
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            {/* <i className="fa fa-facebook" aria-hidden="true"></i> */}
            <FaFacebook />
          </a>
      </div>
      <div className="header-center">
        <img src={logo} alt="Logo" />
      </div>
      <div className="header-right">
        <nav>
          <ul>
            <li>
              <a className='button-nav' href="https://booksalon.fi/salon/healing-naturally-by-suvi?booking-state=N4IgpgtgDgNg9gTzGAkgExALhANgOwCMAxnmgMwBMAhkVQKw4AsADMxY3WAEaNFkgBfIA" target="_blank" rel="noopener noreferrer">
                <button>Ajanvaraus</button>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      </div>
      <div className="header-links">
        <Link className="header-link" to="/">Etusivu</Link>
        <Link className="header-link" to="/about">Yrittäjästä</Link>
      </div>
    </header>
  );
};

export default Header;