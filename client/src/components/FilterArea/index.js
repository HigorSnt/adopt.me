import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

import './styles.css';

function FilterArea({ selected, setSelected }) {
  const [options, setOptions] = useState(['Cachorros', 'Gatos', 'Pássaros', 'Cobras', 'Hamsters']);

  function handleSelected(option) {
    let newOptions = [...options];
    setOptions(newOptions.filter((e) => e !== option).sort());
    setSelected([...selected, option]);
  }

  function handleDeselect(option) {
    let newSelected = [...selected];
    setSelected(newSelected.filter((e) => e !== option));
    setOptions([...options, option].sort());
  }

  return (
    <div>
      <div className="animal-select">
        {selected.map((pet) => (
          <div key={pet} className="options" onClick={() => handleDeselect(pet)}>
            <p>{pet}</p>
            <FaTimes />
          </div>
        ))}
      </div>
      <div className="animal-options">
        {options.map((pet) => (
          <div key={pet} className="options" onClick={() => handleSelected(pet)}>
            <p>{pet}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FilterArea;
