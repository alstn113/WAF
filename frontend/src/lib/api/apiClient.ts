import axios from 'axios';
import { PROPERTIES } from '../../config/properties';

const apiClient = axios.create({
  baseURL: PROPERTIES.API_ENDPOINT,
  withCredentials: true,
});

export default apiClient;
