import React from 'react';
import { FaHeart } from 'react-icons/fa';

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
                <a href="#">
                  {' '}
                  <FaHeart /> doe
                </a>
              </li>
              <li>
                <a href="#">home</a>
              </li>
              <li>
                <a href="#">animais para adoção</a>
              </li>
              <li>
                <a href="#">sobre</a>
              </li>
              <li>
                <a href="#">login</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
