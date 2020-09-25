import React, { useEffect, useState } from 'react';

import Header from '../../components/Header';
import ListItem from '../../components/ListItem';
import FilterArea from '../../components/FilterArea';
import UfSelect from '../../components/UfSelect';
import AgeRange from '../../components/AgeRange';

import './styles.css';

function AdoptableAnimals() {
  const [animals, setAnimals] = useState([1, 2, 3, 4]);
  const [ageValue, setAgeValue] = useState([0]);
  const [optionsSelected, setOptionsSelected] = useState([]);
  const [ufSelected, setUfSelected] = useState('');

  useEffect(() => {
    search();
  }, [ufSelected, optionsSelected, ageValue]);

  function handleInputRange(values) {
    setAgeValue(values);
  }

  // ! lembrar ao passar um array de options vazio deve-se mostrar todas as opções
  // TODO aplicar context para melhorar as atualizações de estado
  function search() {
    console.log(`ageValue: ${ageValue}`);
    console.log(`optionsSelected: ${optionsSelected}`);
    console.log(`ufSelected: ${ufSelected}`);
  }

  return (
    <>
      <Header />
      <div className="container">
        <aside>
          <form>
            <label htmlFor="animal">buscar por...</label>
            <FilterArea
              id="animal"
              selected={optionsSelected}
              setSelected={setOptionsSelected}
            />

            <label htmlFor="location">estado</label>
            <UfSelect uf={ufSelected} setUf={setUfSelected} />

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
