import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import ListItem from '../components/ListItem';

const dog = {
  id: 2,
  name: 'Tobby',
  description:
    'Tobby é um cachorrinho que foi encontrado abandonado na rua e chegou até a gente.\\nDemos alimentação, abrigo e carinho, mas é hora dele encontrar uma nova casa.',
  breed: 'Beagle',
  genre: 2,
  age: 0.5,
  photo_name: 'dog-1601506879617.png',
  special_cares: 'false',
  castrated: 'false',
  dewormed: 'true',
  ong: {
    name: 'Centro de Zoonoses',
    email: 'zoonosescg@gmail.com',
    cnpj: '72568203000190',
    address: 'Rua Isolda Barros Torquato, S/N 58430-030 Campina Grande, PB',
    whatsapp: '',
    phone: '8333107062',
  },
};

const cacatua = {
  id: 1,
  name: 'Fred',
  description: 'Fred é uma cacatua que estava com contrabandistas e chegou até nossa instituição!',
  genre: 1,
  age: 1,
  photo_name: 'cacatua-1601506879617.png',
  special_cares: 'false',
  ong: {
    name: 'Centro de Zoonoses',
    email: 'zoonosescg@gmail.com',
    cnpj: '72568203000190',
    address: 'Rua Isolda Barros Torquato, S/N 58430-030 Campina Grande, PB',
    whatsapp: '',
    phone: '8333107062',
  },
};

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('a pet list item must be rendered', () => {
  act(() => {
    render(<ListItem pet={dog} />, container);
  });
  expect(container.querySelector('.card-details h2').textContent).toEqual(dog.name);
  expect(screen.getByTestId('age-icon')).toBeInTheDocument();
  expect(container.querySelector('#age span').textContent).toEqual('6 meses');
  expect(container.querySelector('#breed')).toBeInTheDocument();
  expect(container.querySelector('#genre span').textContent).toEqual('Fêmea');

  act(() => {
    render(<ListItem pet={cacatua} />, container);
  });
  expect(container.querySelector('.card-details h2').textContent).toEqual(cacatua.name);
  expect(screen.getByTestId('age-icon')).toBeInTheDocument();
  expect(container.querySelector('#age span').textContent).toEqual('1 ano');
  expect(container.querySelector('#breed')).not.toBeInTheDocument();
  expect(container.querySelector('#genre span').textContent).toEqual('Macho');
});
