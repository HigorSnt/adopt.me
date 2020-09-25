import React from 'react';
import { FaTimes } from 'react-icons/fa';

import './styles.css';

function SearchArea() {
  return (
    <div>
      <div className="animal-select">
        <div className="options">
          <p>Cachorros</p>
          <FaTimes />
        </div>
      </div>
      <div className="animal-options">
        <div className="options">
          <p>Gatos</p>
        </div>
        <div className="options">
          <p>Pássaros</p>
        </div>
        <div className="options">
          <p>Cobras</p>
        </div>
        <div className="options">
          <p>Hamsters</p>
        </div>
      </div>
    </div>
  );
}

export default SearchArea;
