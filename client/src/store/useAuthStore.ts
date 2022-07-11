import create from 'zustand';
import AuthAPI from '../libs/api/auth';
import UserAPI from '../libs/api/user';
import { IUser } from '../libs/interfaces';

interface States {
  currentUser: IUser | null;
}

interface Actions {
  getCurrentUser: () => void;
  logout: () => void;
}

const useAuthStore = create<States & Actions>((set) => ({
  // States
  currentUser: null,

  // Actions
  getCurrentUser: async () => {
    const user = await UserAPI.getCurrrentUser();
    set(() => ({ currentUser: user }));
  },
  logout: async () => {
    await AuthAPI.logout();
    set(() => ({ currentUser: null }));
    window.location.reload();
  },
}));

export default useAuthStore;
