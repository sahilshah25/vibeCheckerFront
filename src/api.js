// src/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://vibechecker3.onrender.com/api', // change when deployed
});

export default api;
