import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="header-left">
        <h1>Naturally Healing by Suvi</h1>
      </div>
      <div className="header-right">
        <nav>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <button>Book Now</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
