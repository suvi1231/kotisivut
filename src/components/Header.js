import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../images/Logodraft.png';

const Header = () => {
  return (
    <header>
      <div className="header-left">
        <Link to="/">
          <h1>Healing Naturally by Suvi</h1>
        </Link>
      </div>
      <div className="header-center">
        <img src={logo} alt="Logo" />
      </div>
      <div className="header-right">
        <nav>
          <ul>
            <li>
              <Link className='linkki' to="/about">Lisätietoja</Link> {/* Fixed the incorrect Link usage */}
            </li>
            <li>
              <a className='button-nav' href="https://booksalon.fi/salon/healing-naturally-by-suvi?booking-state=N4IgpgtgDgNg9gTzGAkgExALhANgOwCMAxnmgMwBMAhkVQKw4AsADMxY3WAEaNFkgBfIA" target="_blank" rel="noopener noreferrer">
                <button>Varaa aika</button>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;