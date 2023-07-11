import axios from 'axios';

export const TravelApi = axios.create({
  baseURL: 'http://apis.data.go.kr/B551011/KorService1',
  headers: {
    'Content-Type': 'application/json',
  },
});

TravelApi.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);
TravelApi.interceptors.response.use(
  response => {
    if (response.status === 404) {
      console.log('404 error');
    }
    console.log(window.location.href);
    return response;
  },
  error => {
    return Promise.reject(error);
  },
);
