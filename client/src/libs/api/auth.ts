import apiClient from './apiClient';

const AuthAPI = {
  logout: async () => {
    await apiClient.delete('/auth/logout');
  },
};

export default AuthAPI;
