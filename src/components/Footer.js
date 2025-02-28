import React from 'react';
import { FaInstagram, FaFacebook, FaGlobeEurope } from 'react-icons/fa';
import './Footer.css';
import logo from '../images/HealingNaturally.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <img src={logo} alt="Logo" className="footer-logo" />
      </div>

      <div className="footer-right">
        <h3>Aukioloajat:</h3>
        <p>Ma-to 08.00–16.00</p>
        <p>Pe 09.00–14.00</p>
        <p>Poikkeusajat sopimuksen mukaan.</p>
        <h3>Yhteystiedot</h3>
        <p>+358503527209</p>
        <p>suvi.turunen21@gmail.com</p>
        {/* <div className="social-icons">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
        </div> */}
      </div>
      <div className="footer-mobile-logo">
        <img src={logo} alt="Logo" className="footer-logo" />
      </div>
    </footer>
  );
};

export default Footer;