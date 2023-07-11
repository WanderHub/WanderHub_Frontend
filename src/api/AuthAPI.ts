import axios from 'axios';
import { WANDERHUB } from '@/api/BASEURL';

export const AuthAPI = axios.create({
  baseURL: WANDERHUB,
  headers: {
    'Content-Type': 'application/json',
  },
});

AuthAPI.interceptors.response.use(response => {
  if (response.data.access_token !== undefined) {
    localStorage.setItem('access_token', response.data.access_token);
  }
  return response;
});

export default AuthAPI;
