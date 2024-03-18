import axios, { AxiosInstance } from 'axios';

const baseURL = import.meta.env.API_BASE_URL_PROD || 'http://localhost:5173';

const api: AxiosInstance = axios.create({
  baseURL,
});

export default api;
