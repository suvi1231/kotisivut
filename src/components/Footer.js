import React from 'react';
import { FaInstagram, FaFacebook, FaGlobeEurope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Naturally Healing by Suvi</p>
        <a href="https://booksalon.fi/salon/healing-naturally-by-suvi?booking-state=N4IgpgtgDgNg9gTzGAkgExALhANgOwCMAxnmgMwBMAhkVQKw4AsADMxY3WAEaNFkgBfIA" target="_blank" rel="noopener noreferrer">
          Varaa aika
        </a>
      </div>
      <div className="footer-icons">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
      </div>
      <div className='tinkerit-div'>
        <a className='tinkerit-globe'>
          <FaGlobeEurope />
        </a>
        <a className='tinkerit' href="https://www.tinkerit.fi" target="_blank" rel="noopener noreferrer">
          Tinkerit
        </a>
        </div>
    </footer>
  );
};

export default Footer;