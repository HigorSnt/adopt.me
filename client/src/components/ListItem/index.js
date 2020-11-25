import React from 'react';
import PropTypes from 'prop-types';
import { FaBirthdayCake, FaClinicMedical, FaInfoCircle, FaVenusMars, FaTag } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';

import { baseURL } from '../../services/api';

import './styles.css';

function ListItem({ pet }) {
  const history = useHistory();

  function handleClick() {
    history.push('pet', { pet });
  }

  return (
    <div className="card" onClick={handleClick}>
      <img src={`${baseURL}/files/${pet.photo_name}`} alt="tobby" />
      <div className="card-details">
        <h2>{pet.name}</h2>
        <div id="age" className="item">
          <FaBirthdayCake data-testid="age-icon" />
          <span>
            {pet.age < 1
              ? `${Math.floor(pet.age * 12)} meses`
              : pet.age === 1
              ? `${Math.floor(pet.age)} ano`
              : `${Math.floor(pet.age)} anos`}
          </span>
        </div>

        {pet.breed && (
          <div id="breed" className="item">
            <FaTag />
            <span>{pet.breed}</span>
          </div>
        )}

        <div id="special-cares" className="item">
          <FaClinicMedical />
          <span data-testid="special-cares-text">
            {pet.special_cares
              ? 'Precisa de cuidados especiais'
              : 'Não precisa de cuidados especiais'}
          </span>
        </div>

        <div id="genre" className="item">
          <FaVenusMars />
          <span>{pet.genre === 1 ? 'Macho' : 'Fêmea'}</span>
        </div>

        <div id="ong-name" className="item">
          <FaInfoCircle />
          <span>{pet.ong.name}</span>
        </div>
      </div>
    </div>
  );
}

ListItem.propTypes = {
  pet: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    breed: PropTypes.string,
    genre: PropTypes.number.isRequired,
    age: PropTypes.number.isRequired,
    photo_name: PropTypes.string.isRequired,
    special_cares: PropTypes.bool.isRequired,
    castrated: PropTypes.bool,
    dewormed: PropTypes.bool,
    ong: PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      cnpj: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
      whatsapp: PropTypes.string,
      phone: PropTypes.string.isRequired,
    }),
  }),
};

export default ListItem;
