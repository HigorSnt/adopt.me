import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import ListItem from '../../components/ListItem';
import FilterArea from '../../components/FilterArea';
import UfSelect from '../../components/UfSelect';
import AgeRange from '../../components/AgeRange';

import api from '../../services/api';

import './styles.css';

function AdoptableAnimals() {
  const [animals, setAnimals] = useState([]);
  const [ageValue, setAgeValue] = useState([0]);
  const [optionsSelected, setOptionsSelected] = useState([]);
  const [ufSelected, setUfSelected] = useState('');

  useEffect(() => {
    api.get('pets').then((response) => {
      setAnimals(response.data);
    });
  }, []);

  useEffect(() => {
    search();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ufSelected, optionsSelected, ageValue]);

  function handleInputRange(values) {
    setAgeValue(values);
  }

  // ! lembrar ao passar um array de options vazio deve-se mostrar todas as opções
  // TODO aplicar context para melhorar as atualizações de estado
  function search() {
    console.log(`ageValue: ${ageValue}`);
    console.log(`optionsSelected: ${optionsSelected.map((opt) => opt.specie)}`);
    console.log(`ufSelected: ${ufSelected}`);
  }

  return (
    <>
      <Header />
      <div className="container">
        <aside>
          <form>
            <label htmlFor="animal">buscar por...</label>
            <FilterArea id="animal" selected={optionsSelected} setSelected={setOptionsSelected} />

            <label htmlFor="location">estado</label>
            <UfSelect uf={ufSelected} setUf={setUfSelected} />

            <label htmlFor="age">a busca será por animais com até {ageValue[0]} anos</label>
            <AgeRange age={ageValue} onChange={handleInputRange} />
          </form>
        </aside>

        <main>
          {animals.map((animal) => (
            <Link key={animal.id} to={{ pathname: '/pet', pet: animal }}>
              <ListItem pet={animal} />
            </Link>
          ))}
        </main>
      </div>
    </>
  );
}

export default AdoptableAnimals;
