import React, { useEffect, useReducer, useState } from 'react';
import { Drawer, makeStyles } from '@material-ui/core';
import { FaFilter } from 'react-icons/fa';

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

const useStyles = makeStyles({
  box: {
    width: '50%',
  },
});

function AdoptableAnimals() {
  const [state, dispatch] = useReducer(filterReducer, initialState);

  const [open, setOpen] = useState(false);
  const [animals, setAnimals] = useState([]);

  const classes = useStyles();

  const filterArea = (
    <form className="filter-form">
      <label htmlFor="animal">buscar por...</label>
      <FilterArea id="animal" />

      <label htmlFor="location">estado</label>
      <UfSelect />

      <label htmlFor="age">a busca será por animais com até {state.ageValue[0]} anos</label>
      <AgeRange />
    </form>
  );

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

  function toggleOpen() {
    setOpen(!open);
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
        <aside id="responsive-filter-area">
          <button id="filter-button" onClick={toggleOpen}>
            <FaFilter /> <span>Filtrar</span>
          </button>
          <Drawer
            classes={{ root: classes.box }}
            anchor="right"
            open={open}
            onClose={toggleOpen}
            containerStyle={{ width: '100%' }}
          >
            {filterArea}
          </Drawer>
        </aside>
        <aside id="filter-area">{filterArea}</aside>

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
