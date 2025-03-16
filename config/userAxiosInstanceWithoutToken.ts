import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import CONFIG from '.';
import { getUserLocale } from './locale';

const userAxiosInstanceWithoutToken = axios.create({
  baseURL: CONFIG.apiUrl,
  timeout: 50000000,
});

// Request interceptor for adding headers or performing any actions before the request is sent
userAxiosInstanceWithoutToken.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    const locale = await getUserLocale();
    config.headers['Accept-Language'] = locale;
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// Response interceptor for handling successful responses and errors
userAxiosInstanceWithoutToken.interceptors.response.use(
  async (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    if (error.response) {
      const { status } = error.response;
      switch (status) {
        case 401:
          break;
        case 403:
          break;
        case 404:
          break;
        default:
          break;
      }
    }
    return Promise.reject(error);
  }
);

export default userAxiosInstanceWithoutToken;
