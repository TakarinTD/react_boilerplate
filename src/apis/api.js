import axios from 'axios';
import camelCase from 'camelcase-keys';
import { getCookie } from '../utils/cookie';

const axiosClient = axios.create({
  baseURL: `${process.env.REACT_APP_API_DOMAIN}/api/v1`,
  responseType: 'json',
  timeout: 15 * 1000,
  transformResponse: [(data) => data],
});

axiosClient.interceptors.request.use(async (config) => {
  const accessToken = getCookie('accessToken');
  // eslint-disable-next-line no-param-reassign
  config.headers.Authorization = `Bearer ${accessToken}`;
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    return response.data.notSnakeCase
      ? response.data
      : camelCase(response.data, { deep: true });
  },
  (error) => {
    // Handle error
    console.error(error);
  },
);

export default axiosClient;
