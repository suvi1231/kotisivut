import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import logo from '../images/HealingNaturally.png';
import { FaInstagram, FaFacebook, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className='header-upper'>
        <div className="header-left">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
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
        <div className="burger-icon" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <Link className={`header-link ${!location.pathname.includes('minusta') ? 'active' : ''}`} to="/" onClick={toggleMenu}>Etusivu</Link>
        <Link className={`header-link ${location.pathname.includes('minusta') ? 'active' : ''}`} to="/minusta" onClick={toggleMenu}>Yrittäjästä</Link>
        <div className="mobile-social-icons">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
        </div>
        <a className='button-nav' href="https://booksalon.fi/salon/healing-naturally-by-suvi?booking-state=N4IgpgtgDgNg9gTzGAkgExALhANgOwCMAxnmgMwBMAhkVQKw4AsADMxY3WAEaNFkgBfIA" target="_blank" rel="noopener noreferrer">
          <button>Ajanvaraus</button>
        </a>
      </div>
    </header>
  );
};

export default Header;