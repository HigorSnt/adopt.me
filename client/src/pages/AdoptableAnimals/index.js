import React, { useState } from 'react';

import Header from '../../components/Header';
import ListItem from '../../components/ListItem';
import SearchArea from '../../components/SearchArea';
import UfSelect from '../../components/UfSelect';
import AgeRange from '../../components/AgeRange';

import './styles.css';

function AdoptableAnimals() {
  const [animals, setAnimals] = useState([1, 2, 3, 4]);
  const [ageValue, setAgeValue] = useState([0]);

  function handleInputRange(values) {
    setAgeValue(values);
  }

  return (
    <>
      <Header />
      <div className="container">
        <aside>
          <form>
            <label htmlFor="animal">buscar por...</label>
            <SearchArea id="animal" />

            <label htmlFor="location">estado</label>
            <UfSelect />

            <label htmlFor="age">a busca será por animais com até {ageValue[0]} anos</label>
            <AgeRange age={ageValue} onChange={handleInputRange} />
          </form>
        </aside>

        <main>
          {animals.map((animal) => (
            <ListItem key={animal} />
          ))}
        </main>
      </div>
    </>
  );
}

export default AdoptableAnimals;
