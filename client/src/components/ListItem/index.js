import React from 'react';
import { FaBirthdayCake, FaClinicMedical, FaInfoCircle, FaVenusMars, FaTag } from 'react-icons/fa';

import './styles.css';

function ListItem({ pet }) {
  return (
    <div className="card">
      <img src={`http://localhost:3333/files/${pet.photo_name}` } alt="tobby" />
      <div className="card-details">
        <h2>{pet.name}</h2>
        <div className="item">
          <FaBirthdayCake />
          <span>
            {pet.age < 1 ? `${Math.floor(pet.age * 12)} meses` : `${Math.floor(pet.age)} anos`}
          </span>
        </div>

        {pet.breed && (
          <div className="item">
            <FaTag />
            <span>{pet.breed}</span>
          </div>
        )}

        <div className="item">
          <FaClinicMedical />
          <span>
            {pet.special_cares
              ? 'Precisa de cuidados especiais'
              : 'Não precisa de cuidados especiais'}
          </span>
        </div>

        <div className="item">
          <FaVenusMars />
          <span>{pet.genre === 1 ? 'Macho' : 'Fêmea'}</span>
        </div>

        <div className="item">
          <FaInfoCircle />
          <span>{pet.ong.name}</span>
        </div>
      </div>
    </div>
  );
}

export default ListItem;
