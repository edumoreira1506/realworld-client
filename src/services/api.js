import { apiUrl } from '../config/constants';
import axios from 'axios';

const api = axios.create({
  baseURL: apiUrl
});

export default api;
