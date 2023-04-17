import { useEffect } from "react";
import useRefreshToken from "./useRefreshToken";
import { useAuth } from "./useAuth";
import apiClient from "../../../api/axios";

const useAxiosPrivate = () => {
  const refresh = useRefreshToken();
  const { auth } = useAuth();

  useEffect(() => {
    const requestIntercept = apiClient.private.interceptors.request.use(
      (config) => {
        if (!config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${auth?.token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseIntercept = apiClient.private.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error?.config;
        if (error?.response?.status === 403 && !prevRequest?.sent) {
          prevRequest.sent = true;

          const newAccessToken = await refresh();

          prevRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
          return apiClient.private(prevRequest);
        }
        return Promise.reject(error);
      }
    );

    return () => {
      apiClient.private.interceptors.request.eject(requestIntercept);
      apiClient.private.interceptors.response.eject(responseIntercept);
    };
  }, [auth, refresh]);

  return apiClient.private;
};

export default useAxiosPrivate;
