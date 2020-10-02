import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import ListItem from '../../components/ListItem';
import FilterArea from '../../components/FilterArea';
import UfSelect from '../../components/UfSelect';
import AgeRange from '../../components/AgeRange';

import './styles.css';

function AdoptableAnimals() {
  let animalsMock = [
    {
      id: 1,
      name: 'Tobby',
      description:
        'Tobby é um cachorrinho que foi encontrado abandonado na rua e chegou até a gente.\\nDemos alimentação, abrigo e carinho, mas é hora dele encontrar uma nova casa.',
      breed: 'Beagle',
      genre: 1,
      age: 2,
      photo_name: 'dog-1601578544512.png',
      special_cares: false,
      castrated: false,
      dewormed: true,
      ong: {
        name: 'Centro de Zoonoses',
        email: 'zoonosescg@gmail.com',
        cnpj: '72568203000190',
        address: 'Rua Isolda Barros Torquato, S/N 58430-030 Campina Grande, PB',
        whatsapp: '',
        phone: '8333107062',
      },
    },
    {
      id: 2,
      name: 'Luna',
      description:
        'Tobby é um cachorrinho que foi encontrado abandonado na rua e chegou até a gente.\\nDemos alimentação, abrigo e carinho, mas é hora dele encontrar uma nova casa.',
      breed: 'Beagle',
      genre: 2,
      age: 6,
      photo_name: 'dog-1601506879617.png',
      special_cares: false,
      castrated: false,
      dewormed: true,
      ong: {
        name: 'Centro de Zoonoses',
        email: 'zoonosescg@gmail.com',
        cnpj: '72568203000190',
        address: 'Rua Isolda Barros Torquato, S/N 58430-030 Campina Grande, PB',
        whatsapp: '',
        phone: '8333107062',
      },
    },
    {
      id: 3,
      name: 'Spike',
      description:
        'Tobby é um cachorrinho que foi encontrado abandonado na rua e chegou até a gente.\\nDemos alimentação, abrigo e carinho, mas é hora dele encontrar uma nova casa.',
      breed: 'Beagle',
      genre: 1,
      age: 0.5,
      photo_name: 'dog-1601520170848.png',
      special_cares: true,
      castrated: true,
      dewormed: false,
      ong: {
        name: 'Centro de Zoonoses',
        email: 'zoonosescg@gmail.com',
        cnpj: '72568203000190',
        address: 'Rua Isolda Barros Torquato, S/N 58430-030 Campina Grande, PB',
        whatsapp: '',
        phone: '8333107062',
      },
    },
    {
      id: 4,
      name: 'Dexter',
      description:
        'Tobby é um cachorrinho que foi encontrado abandonado na rua e chegou até a gente.\\nDemos alimentação, abrigo e carinho, mas é hora dele encontrar uma nova casa.',
      breed: 'Beagle',
      genre: 1,
      age: 0.3,
      photo_name: 'dog-1601578552993.png',
      special_cares: false,
      castrated: false,
      dewormed: true,
      ong: {
        name: 'Centro de Zoonoses',
        email: 'zoonosescg@gmail.com',
        cnpj: '72568203000190',
        address: 'Rua Isolda Barros Torquato, S/N 58430-030 Campina Grande, PB',
        whatsapp: '',
        phone: '8333107062',
      },
    },
  ];

  const [animals, setAnimals] = useState(animalsMock);
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
