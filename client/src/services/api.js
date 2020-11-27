import axios from 'axios';

const baseURL = 'https://adoptemeapi.herokuapp.com/';

const api = axios.create({
  baseURL,
});

export const getPets = async () => {
  let response = await api.get('/pets');
  return response.data;
};

export const filterPets = async (params) => {
  let species = params.optionsSelected.map(o => o.id).join(',');

  let response = await api.get(`/pets`, {
    params: { uf: params.ufSelected, age: params.ageValue[0], specie: species },
  });
  return response.data;
};

export const registerOng = async (ong) => {
  await api.post('/ongs', ong);
};

export const login = async (credentials) => {
  let response = await api.post('/login', credentials);
  return response.data;
};

export const getSpecies = async () => {
  let response = await api.get('/species');
  return response.data;
};

export const createPet = async (pet) => {
  let { token } = JSON.parse(localStorage.getItem('loggedUser'));
  await api.post('/pets', pet, { headers: { Authorization: `Bearer ${token}` } });
};
