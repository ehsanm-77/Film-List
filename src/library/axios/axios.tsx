import axios from 'axios';
export const films = axios.create({
  baseURL: 'http://localhost:3000',
});
