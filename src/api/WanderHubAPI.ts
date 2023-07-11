import axios, { AxiosRequestConfig } from 'axios';

import { WANDERHUB } from '@/api/BASEURL';

const instance = axios.create({
  baseURL: WANDERHUB,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(request => {
  const accessToken = localStorage.getItem('access_token');
  if (accessToken !== null) {
    request.headers.authorization = `bearer ${accessToken}`;
  }
  return request;
});

const WanderHubAPI = {
  get: (url: string) => instance.get(url),
  delete: (url: string) => instance.delete(url),
  patch: (url: string, data: object) => instance.patch(url, data),
  post: (url: string, data: object, config?: AxiosRequestConfig) =>
    instance.post(url, data, config),
};

export default WanderHubAPI;
