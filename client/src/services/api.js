import axios from 'axios';

export const baseURL = 'http://localhost:3333';

const api = axios.create({
  baseURL,
});

export const getPets = async () => {
  let response = await api.get('/pets');
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
  let { token } = localStorage.getItem('loggedUser');
  await api.get('/pets', pet, { headers: { Authorization: `Bearer ${token}` } });
};

export default api;
