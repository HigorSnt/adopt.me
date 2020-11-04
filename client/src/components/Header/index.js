import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/adopte.me.svg';

import './styles.css';

function Header() {
  return (
    <header>
      <nav>
        <div>
          <img src={logo} alt="adopte.me" />
        </div>
        <div className="menu">
          <div>
            <ul>
              <li>
                <Link to="">
                  {' '}
                  <FaHeart /> <span>doe</span>
                </Link>
              </li>
              <li>
                <Link to="">home</Link>
              </li>
              <li>
                <Link to="/">animais para adoção</Link>
              </li>
              <li>
                <Link to="">sobre</Link>
              </li>
              <li>
                <Link to="/login">login</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
