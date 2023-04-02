import React, { ReactNode, useEffect, useMemo, useState } from "react";

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

export interface UserType {
  name: string;
  email: string;
  phone: string | null;
  bio: string | null;
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
  const token = localStorage.getItem("token");
  const expiresAt = localStorage.getItem("expiresAt");
  const userInfo = localStorage.getItem("userInfo");

  const [auth, setAuth] = useState({ token, expiresAt, userInfo });
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    setIsAuthenticated((prevState: boolean) => {
      if (!auth.token) {
        return false;
      }
      return Number(auth.expiresAt) * 1000 > new Date().getTime();
    });
  }, []);

  const login = ({ token, expiresAt, userInfo }: AuthStateType) => {
    setAuth((auth: AuthStateType) => {
      localStorage.setItem("token", token!);
      localStorage.setItem("expiresAt", String(expiresAt));
      localStorage.setItem("userInfo", userInfo!);

      return { token, expiresAt, userInfo };
    });
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("expiresAt");
    localStorage.removeItem("userInfo");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ auth, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
