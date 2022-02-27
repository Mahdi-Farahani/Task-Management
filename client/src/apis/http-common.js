import axios from 'axios';

export const BASE_URL_API = 'https://task-getir-api.herokuapp.com';

const API = axios.create({
  baseURL: BASE_URL_API,
  headers: {
    'Content-type': 'application/json',
  },
});

export default API;
