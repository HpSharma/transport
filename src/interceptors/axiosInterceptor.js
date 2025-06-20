import axios from 'axios';

const BASEURL = import.meta.env.VITE_BASE_API_URL || window.location.origin;

const axiosInstance = axios.create({
  baseURL: BASEURL,
  timeout: 50000,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default axiosInstance;
