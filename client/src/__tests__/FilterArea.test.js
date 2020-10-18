import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { screen, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import MockAdapter from 'axios-mock-adapter';
import '@testing-library/jest-dom';

import api from '../services/api';
import FilterArea from '../components/FilterArea';

const species = [
  {
    id: 1,
    specie: 'Cachorros',
  },
  {
    id: 2,
    specie: 'Coelhos',
  },
  {
    id: 3,
    specie: 'Hamsters',
  },
  {
    id: 4,
    specie: 'Gatos',
  },
  {
    id: 5,
    specie: 'Bovinos',
  },
  {
    id: 6,
    specie: 'Equinos',
  },
  {
    id: 7,
    specie: 'Aves',
  },
  {
    id: 8,
    specie: 'Outros',
  },
];

let container = null;
let mockServer = null;
beforeEach(() => {
  mockServer = new MockAdapter(api);
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('should search for all available species and show them', async () => {
  mockServer.onGet('/species').reply(200, species);

  await act(async () => {
    let selected = [];
    const setSelect = (e) => {
      selected = e;
    };
    render(<FilterArea selected={selected} setSelected={setSelect} />, container);
  });

  expect(container.querySelector('.animal-options .options')).toBeInTheDocument();
  expect(container.querySelectorAll('.animal-options .options')).toHaveLength(species.length);
});

it('should be possible to select species and change options', async () => {
  mockServer.onGet('/species').reply(200, species);

  await act(async () => {
    let selected = [];
    const setSelect = (e) => {
      selected = e;
    };
    render(<FilterArea selected={selected} setSelected={setSelect} />, container);
  });

  fireEvent.click(screen.getByText('Aves'));
  expect(container.querySelectorAll('.animal-options .options')).toHaveLength(species.length - 1);
  fireEvent.click(screen.getByText('Outros'));
  fireEvent.click(screen.getByText('Coelhos'));
  expect(container.querySelectorAll('.animal-options .options')).toHaveLength(species.length - 3);
});
