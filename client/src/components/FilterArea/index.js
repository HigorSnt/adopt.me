import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa';

import api from '../../services/api';

import './styles.css';

function FilterArea({ selected, setSelected }) {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    api.get('species').then((response) => {
      setOptions(response.data.sort(sortOptions));
    });
  }, []);

  function sortOptions(a, b) {
    return a.specie > b.specie ? 1 : -1;
  }

  function handleSelected(option) {
    let newOptions = [...options];
    setOptions(newOptions.filter((e) => e !== option).sort(sortOptions));
    setSelected([...selected, option]);
  }

  function handleDeselect(option) {
    let newSelected = [...selected];
    setSelected(newSelected.filter((e) => e !== option));
    setOptions([...options, option].sort(sortOptions));
  }

  return (
    <div>
      <div className="animal-select">
        {selected.map((pet) => (
          <div key={pet.id} className="options" onClick={() => handleDeselect(pet)}>
            <p>{pet.specie}</p>
            <FaTimes />
          </div>
        ))}
      </div>
      <div className="animal-options">
        {options.map((pet) => (
          <div key={pet.id} className="options" onClick={() => handleSelected(pet)}>
            <p>{pet.specie}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

FilterArea.propTypes = {
  selected: PropTypes.array.isRequired,
  setSelected: PropTypes.func.isRequired,
};

export default FilterArea;
