import axios from 'axios';

const api = axios.create({
  // baseURL: 'http://localhost:5000/api/v1/minta-fresh',
  baseURL: 'https://api.mintarestro.com/api/v1/minta-fresh',
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
});

export default api;
