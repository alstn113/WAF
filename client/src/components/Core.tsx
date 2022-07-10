import { useEffect } from 'react';
import useAuthStore from '../store/useAuthStore';

const Core = () => {
  const { currentUser, getCurrentUser } = useAuthStore();
  console.log(currentUser?.username);
  useEffect(() => {
    getCurrentUser();
  }, []);

  return <></>;
};

export default Core;
