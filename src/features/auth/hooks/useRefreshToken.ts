import { useAuth } from "./useAuth";
import apiClient from "../../../api/axios";

const useRefreshToken = () => {
  const { setAuth } = useAuth();
  return async () => {
    const response = await apiClient.axios.get("/token/refresh", {
      withCredentials: true,
    });
    setAuth((state: any) => ({ ...state, token: response?.data?.token }));
    return response?.data?.token;
  };
};

export default useRefreshToken;
