import axios from 'axios';
import { TRAVEL } from './BASEURL';

const TravelAPI = axios.create({
  baseURL: TRAVEL,
  headers: {
    'Content-Type': 'application/json',
  },
});

TravelAPI.interceptors.response.use(
  response => {
    if (response.status !== 200) {
      console.log('error');
    }
    return response;
  },
  error => {
    return Promise.reject(error);
  },
);

export default TravelAPI;
