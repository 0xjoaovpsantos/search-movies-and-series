import axios from 'axios';
import { API_KEY } from '../../config.json';

const api = axios.create({
  baseURL: `http://www.omdbapi.com/?apikey=${API_KEY}`,
});

export default api;
