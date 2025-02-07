import React from 'react';
import { FaInstagram, FaFacebook, FaGlobeEurope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p>Naturally Healing by Suvi</p>
        <div className="social-icons">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
        </div>
      </div>

      <div className="footer-center">
        <a href="https://booksalon.fi/salon/healing-naturally-by-suvi?booking-state=N4IgpgtgDgNg9gTzGAkgExALhANgOwCMAxnmgMwBMAhkVQKw4AsADMxY3WAEaNFkgBfIA" 
           target="_blank" 
           rel="noopener noreferrer">
          Varaa aika
        </a>
      </div>

      <div className="footer-right">
        <FaGlobeEurope className="globe-icon" />
        <a className='tinkerit' 
           href="https://www.tinkerit.fi" 
           target="_blank" 
           rel="noopener noreferrer">
          Tinkerit
        </a>
      </div>
    </footer>
  );
};

export default Footer;