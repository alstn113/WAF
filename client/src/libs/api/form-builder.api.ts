import { IFormBuilderCreateRequest } from '../interfaces';
import apiClient from './apiClient.api';

const FormBuilderAPI = {
  getFormBuilder: async (id: string) => {
    const { data } = await apiClient.get(`/form-builder/${id}`);
    return data;
  },

  createFormBuilder: async (input: IFormBuilderCreateRequest) => {
    const { data } = await apiClient.post('/form-builder', input);
    return data;
  },

  deleteFormBuilder: async (id: string) => {
    const { data } = await apiClient.delete(`/form-builder/${id}`);
    return data;
  },
};

export default FormBuilderAPI;
