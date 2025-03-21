import React from 'react';
import './Footer.css';
import logo from '../images/HealingNaturally.png';

const Footer = () => {
  return (
    <>
    <footer className="footer">
      <div className="footer-left">
        <img src={logo} alt="Logo" className="footer-logo" />
      </div>

      <div className="footer-right">
        <div className="footer-hours">
          <h3>Aukioloajat:</h3>
          <p>Ma-Pe Sopimuksen mukaan</p>
          <p>Poikkeusajat sopimuksen mukaan.</p>
        </div>
        <div className="footer-contact">
          <h3>Yhteystiedot</h3>
          <p>+358503527209</p>
          <p>info@healingbysuvi.fi</p>
          <p>Luotolantie 8, 04230 Kerava</p>
        </div>
      </div>
    </footer>
      <div className="footer-credits">
        <p>
          Visuaalinen identiteetti: <a href="https://www.tinkerit.fi" target="_blank" rel="noopener noreferrer">TinkerIT</a> | Etusivun kuva ja video: Valkea Visuals Oy
        </p>
      </div>
    </>
  );
};

export default Footer;