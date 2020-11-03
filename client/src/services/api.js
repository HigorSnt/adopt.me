import axios from 'axios';

export const baseURL = 'http://localhost:3333';

const api = axios.create({
  baseURL,
});

export const getPets = async () => {
  let response = await api.get('/pets');
  return response.data;
};

export default api;
