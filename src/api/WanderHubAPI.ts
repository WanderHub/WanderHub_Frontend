import axios, { AxiosRequestConfig } from 'axios';

const instance = axios.create({
  baseURL: '/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

const WanderHubAPI = {
  get: (url: string) => instance.get(url),
  delete: (url: string) => instance.delete(url),
  patch: (url: string, data: object) => instance.patch(url, data),
  post: (url: string, data: object, config?: AxiosRequestConfig) =>
    instance.post(url, data, config),
};

export default WanderHubAPI;
