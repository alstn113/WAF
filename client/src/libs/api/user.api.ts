import { IUser } from '@libs/interfaces';
import apiClient from '@libs/api/apiClient.api';

const UserAPI = {
  getCurrrentUser: async (): Promise<IUser | null> => {
    const { data } = await apiClient.get('/user');
    return data;
  },
};

export default UserAPI;
