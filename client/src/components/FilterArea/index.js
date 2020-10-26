import React, { useState, useEffect, useContext } from 'react';
import { FaTimes } from 'react-icons/fa';

import * as Actions from '../../constants';
import AdoptableAnimalsContext from '../../contexts/AdoptableAnimalsContext';
import api from '../../services/api';

import './styles.css';

function FilterArea() {
  const [options, setOptions] = useState([]);
  const { state, dispatch } = useContext(AdoptableAnimalsContext);
  const { optionsSelected: selected } = state;

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
    dispatch({ type: Actions.CHANGE_OPTIONS_SELECTED, payload: [...selected, option] });
  }

  function handleDeselect(option) {
    let newSelected = [...selected];
    dispatch({
      type: Actions.CHANGE_OPTIONS_SELECTED,
      payload: newSelected.filter((e) => e !== option),
    });
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

export default FilterArea;
