import { AuthProvider } from "../../features/authentication/context/AuthContext";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  );
};

export default RootLayout;
