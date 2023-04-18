import { useAuth } from "./useAuth";
import apiClient from "../../../api/axios";
import { ROUTES } from "../../../constants/routes";

const useRefreshToken = () => {
  const { refresh } = useAuth();
  return async () => {
    const response = await apiClient.axios.get(ROUTES.refreshToken, {
      withCredentials: true,
    });
    console.log(response);
    const token = response?.data?.token;
    const user = response?.data?.user;
    token && refresh(token, user);
    return token;
  };
};

export default useRefreshToken;
