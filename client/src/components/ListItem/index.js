import React from 'react';
import { FaBirthdayCake, FaClinicMedical, FaInfoCircle } from 'react-icons/fa';

import './styles.css';
import dog from '../../assets/images/dog.png';

function ListItem() {
  return (
    <div className="card">
      <img src={dog} alt="tobby" />
      <div className="card-details">
        <h2>Tobby</h2>
        <div className="item">
          <FaBirthdayCake />
          <span>5 meses</span>
        </div>

        <div className="item">
          <FaClinicMedical />
          <span>Não precisa de cuidados especiais</span>
        </div>

        <div className="item">
          <FaInfoCircle />
          <span>Instituição</span>
        </div>

        <div className="adote-button">
          <a href="item.html">adotar</a>
        </div>
      </div>
    </div>
  );
}

export default ListItem;
