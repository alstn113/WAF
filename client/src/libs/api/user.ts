import { IUser } from '../interfaces';
import apiClient from './apiClient';

const UserAPI = {
  getCurrrentUser: async (): Promise<IUser | null> => {
    const { data } = await apiClient.get('/user');
    return data;
  },
};

export default UserAPI;
