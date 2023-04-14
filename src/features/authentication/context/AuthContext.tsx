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
  user: UserType;
}

const defaultValue: ValueType = {
  auth: {
    token: null,
    userInfo: null,
  },
  isAuthenticated: null,
  login: () => {},
  logout: () => {},
};

const AuthContext = React.createContext(defaultValue);

export const AuthProvider = ({ children }: ProviderProps) => {
  const token = localStorage.getItem("token");
  const userInfo = localStorage.getItem("userInfo");

  const dispatch = useAppDispatch();
  const [auth, setAuth] = useState({
    token,
    userInfo,
  });
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    setIsAuthenticated((prevState: boolean | null) => {
      if (!auth.token) {
        return false;
      }
      return true;
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
        localStorage.setItem("userInfo", JSON.stringify(data.user));
        apiClient.updateAuth();

        return {
          token: data.token,
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
    apiClient.get("token/invalidate").finally(() => {
      console.log("rrr");
      localStorage.removeItem("token");
      localStorage.removeItem("userInfo");
      apiClient.updateAuth();
      setIsAuthenticated(false);
    });
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
