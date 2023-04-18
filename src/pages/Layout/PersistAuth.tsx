import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import useRefreshToken from "../../features/auth/hooks/useRefreshToken";
import { useAuth } from "../../features/auth/hooks/useAuth";
import Loading from "../../components/Loading";

const PersistAuthLayout = () => {
  const [isLoading, setIsLoading] = useState(true);
  const refresh = useRefreshToken();
  const { auth } = useAuth();

  useEffect(() => {
    const verifyRefreshToken = async () => {
      try {
        await refresh();
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    };
    !auth?.token ? verifyRefreshToken() : setIsLoading(false);
  });

  return isLoading ? <Loading /> : <Outlet />;
};

export default PersistAuthLayout;
