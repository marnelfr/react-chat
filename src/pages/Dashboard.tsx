import { MouseEventHandler, useCallback } from "react";
import apiClient from "../api/axios";
import { useAuth } from "../features/auth/hooks/useAuth";
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();

  const handleLogout: MouseEventHandler = useCallback(async (event) => {
    event.preventDefault();
    await apiClient.post("token/invalidate");
    setAuth({});
    navigate("/login");
  }, []);

  return (
    <>
      <p>Dashboard </p>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};

export default DashboardPage;
