import { useLocation, Navigate, Outlet } from 'react-router-dom';
import useAuthStore from '../store/useAuthStore';

const RequireAuth = () => {
  const { currentUser } = useAuthStore();
  const location = useLocation();

  return currentUser ? (
    <Outlet />
  ) : (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  );
};

export default RequireAuth;
