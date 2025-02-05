import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="header-left">
        <Link to="/">
          <h1>Naturally Healing by Suvi</h1>
        </Link>
      </div>
      <div className="header-right">
        <nav>
          <ul>
            <li>
              <Link to="/about">About</Link> {/* Fixed the incorrect Link usage */}
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