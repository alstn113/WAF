import {
  IFormBuilderCreateRequest,
  IFormBuilderUpdateRequest,
} from '@libs/interfaces';
import apiClient from '@libs/api/apiClient.api';

const FormBuilderAPI = {
  getFormBuilders: async () => {
    const { data } = await apiClient.get('/form-builder');
    return data;
  },
  getFormBuilder: async (id: string) => {
    const { data } = await apiClient.get(`/form-builder/${id}`);
    return data;
  },
  createFormBuilder: async (input: IFormBuilderCreateRequest) => {
    const { data } = await apiClient.post('/form-builder', input);
    return data;
  },
  updateFormBuilder:
    (id: string) => async (input: IFormBuilderUpdateRequest) => {
      const { data } = await apiClient.patch(`/form-builder/${id}`, input);
      return data;
    },
  deleteFormBuilder: async (id: string) => {
    const { data } = await apiClient.delete(`/form-builder/${id}`);
    return data;
  },
};

export default FormBuilderAPI;
