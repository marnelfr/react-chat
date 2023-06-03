import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../../features/auth/hooks/useAuth";
import { ROUTES } from "../../constants/routes";
import ModalSubscription from "../../features/messenger/components/Conversation/ModalSubscription";

const AuthLayout = () => {
  const { auth } = useAuth();
  const location = useLocation();

  return auth?.token ? (
    <>
      <ModalSubscription />
      <Outlet />
    </>
  ) : (
    <Navigate to={ROUTES.login} state={{ from: location }} replace />
  );
};

export default AuthLayout;
