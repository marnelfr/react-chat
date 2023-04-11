import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../features/authentication/context/AuthContext";

const AuthLayout = () => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default AuthLayout;
