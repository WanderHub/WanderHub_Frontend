import axios, { AxiosRequestConfig } from 'axios';
import { WANDERHUB } from '@/api/BASEURL';

const instance = axios.create({
  baseURL: '/v1',
  headers: {
    'Content-Type': 'application/json',
    // 'Access-Control-Allow-Origin': '*',
  },
  // withCredentials: true,
});

instance.interceptors.request.use(request => {
  const accessToken = localStorage.getItem('accessToken');
  if (accessToken !== null) {
    request.headers.authorization = `Bearer ${accessToken}`;
  }
  return request;
});

instance.interceptors.response.use(response => {
  const accessToken = localStorage.getItem('accessToken');
  response.headers = {
    authorization: `Bearer ${accessToken}`,
  };
  return response;
});

const AuthAPI = {
  get: (url: string) => instance.get(url),
  delete: (url: string) => instance.delete(url),
  patch: (url: string, data: object) => instance.patch(url, data),
  post: (url: string, data: object, config?: AxiosRequestConfig) =>
    instance.post(url, data, config),
};

export default AuthAPI;
