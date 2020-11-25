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
  return await api.post('/login', credentials)
}

export default api;
