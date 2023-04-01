import React, { ReactNode, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../constants/routes";

interface AuthStateType {
  token: string | null;
  expiresAt: string | null;
  userInfo: string | null;
}

interface ValueType {
  auth: AuthStateType;
  isAuthenticated: boolean;
  login: ({ token, expiresAt, userInfo }: AuthStateType) => void;
  logout: () => void;
}

interface ProviderProps {
  children: ReactNode;
}

const defaultValue: ValueType = {
  auth: {
    token: null,
    expiresAt: null,
    userInfo: null,
  },
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
};

const AuthContext = React.createContext(defaultValue);

export const AuthProvider = ({ children }: ProviderProps) => {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const expiresAt = localStorage.getItem("expiresAt");
  const userInfo = localStorage.getItem("userInfo");

  const [auth, setAuth] = useState({ token, expiresAt, userInfo });

  const login = ({ token, expiresAt, userInfo }: AuthStateType) => {
    setAuth((auth: AuthStateType) => {
      localStorage.setItem("token", token!);
      localStorage.setItem("expiresAt", String(expiresAt));
      localStorage.setItem("userInfo", userInfo!);

      return { token, expiresAt, userInfo };
    });
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("expiresAt");
    localStorage.removeItem("userInfo");
    navigate(ROUTES.login);
  };

  const isAuthenticated = useMemo(() => {
    if (!auth.token) {
      return false;
    }
    return Number(auth.expiresAt) * 1000 > new Date().getTime();
  }, [auth]);

  return (
    <AuthContext.Provider value={{ auth, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
