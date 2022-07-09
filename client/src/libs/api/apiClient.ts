import axios from 'axios';
import { PROPERTIES } from '../../config/properties';

const apiClient = axios.create({
  baseURL: PROPERTIES.BASE_URL,
  withCredentials: true,
});

export default apiClient;
