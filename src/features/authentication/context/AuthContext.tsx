import React, {
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { config } from "../../../constants/config";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { loadActions } from "../../messenger/slices/loading";
import apiClient from "../../../api/fetch";

interface AuthStateType {
  token: string | null;
  expiresAt: string | null;
  refreshToken: string | null;
  userInfo?: string | null;
}

interface ValueType {
  auth: AuthStateType;
  isAuthenticated: boolean | null;
  login: (email: string, password: string) => void;
  logout: () => void;
}

interface ProviderProps {
  children: ReactNode;
}

export interface UserType {
  id: number;
  name: string;
  email: string;
  phone: string | null;
  bio: string | null;
}

interface AuthResponseType {
  token: string;
  refresh_expiration: number;
  refresh_token: string;
  user: UserType;
}

const defaultValue: ValueType = {
  auth: {
    token: null,
    expiresAt: null,
    refreshToken: null,
    userInfo: null,
  },
  isAuthenticated: null,
  login: () => {},
  logout: () => {},
};

const AuthContext = React.createContext(defaultValue);

export const AuthProvider = ({ children }: ProviderProps) => {
  const token = localStorage.getItem("token");
  const expiresAt = localStorage.getItem("expiresAt");
  const refreshToken = localStorage.getItem("refreshToken");
  const userInfo = localStorage.getItem("userInfo");

  const dispatch = useAppDispatch();
  const [auth, setAuth] = useState({
    token,
    expiresAt,
    refreshToken,
    userInfo,
  });
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    setIsAuthenticated((prevState: boolean | null) => {
      if (!auth.token) {
        return false;
      }
      return Number(auth.expiresAt) * 1000 > new Date().getTime();
    });
  }, []);

  const login = async (username: string, password: string) => {
    try {
      dispatch(loadActions.set({ key: "login", state: true }));
      const data: AuthResponseType = await apiClient.post("login", {
        username,
        password,
      });

      setAuth((auth: AuthStateType) => {
        localStorage.setItem("token", data.token);
        localStorage.setItem("expiresAt", String(data.refresh_expiration));
        localStorage.setItem("refreshToken", data.refresh_token);
        localStorage.setItem("userInfo", JSON.stringify(data.user));
        apiClient.updateAuth();

        return {
          token: data.token,
          expiresAt: String(data.refresh_expiration),
          refreshToken: data.refresh_token,
          userInfo: JSON.stringify(data.user),
        };
      });

      dispatch(loadActions.set({ key: "login", state: false }));
      setIsAuthenticated(true);
    } catch (e) {
      dispatch(loadActions.setError({ key: "login", state: true }));
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("expiresAt");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("userInfo");
    apiClient.updateAuth();
    // todo: update the logout process to revoke the token in the backend
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ auth, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContext;
