import axios from 'axios';

const BASE_URL_API = 'https://task-getir-api.herokuapp.com';

const API = axios.create({
  baseURL: BASE_URL_API,
  headers: {
    'Content-type': 'application/json',
  },
});
//in this case we dont need axios.interceptors.request.use because we dont have jwt in this project

export default API;
