import React, { useEffect, useReducer, useState } from 'react';

import Header from '../../components/Header';
import ListItem from '../../components/ListItem';
import FilterArea from '../../components/FilterArea';
import UfSelect from '../../components/UfSelect';
import AgeRange from '../../components/AgeRange';

import { filterReducer } from '../../reducers/FilterReducer';
import { getPets } from '../../services/api';
import AdoptableAnimalsContext from '../../contexts/AdoptableAnimalsContext';

import './styles.css';

const initialState = {
  ageValue: [0],
  optionsSelected: [],
  ufSelected: '',
};

function AdoptableAnimals() {
  const [state, dispatch] = useReducer(filterReducer, initialState);

  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    getAnimals();
  }, []);

  useEffect(() => {
    search();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  async function getAnimals() {
    let pets = await getPets();
    setAnimals(pets);
  }

  // ! lembrar ao passar um array de options vazio deve-se mostrar todas as opções
  function search() {
    console.log(`ageValue: ${state.ageValue}`);
    console.log(`optionsSelected: ${state.optionsSelected.map((opt) => opt.specie)}`);
    console.log(`ufSelected: ${state.ufSelected}`);
  }

  return (
    <AdoptableAnimalsContext.Provider value={{ state, dispatch }}>
      <Header />
      <div className="container">
        <aside>
          <form>
            <label htmlFor="animal">buscar por...</label>
            <FilterArea id="animal" />

            <label htmlFor="location">estado</label>
            <UfSelect />

            <label htmlFor="age">a busca será por animais com até {state.ageValue[0]} anos</label>
            <AgeRange />
          </form>
        </aside>

        <main id="animal-list">
          {animals.map((animal) => (
            <ListItem key={animal.id} pet={animal} />
          ))}
        </main>
      </div>
    </AdoptableAnimalsContext.Provider>
  );
}

export default AdoptableAnimals;
