import axios from 'axios';
import { PROPERTIES } from '@src/config/properties';

const apiClient = axios.create({
  baseURL: PROPERTIES.BASE_URL,
  withCredentials: true,
});

export default apiClient;
