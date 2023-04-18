import { createContext, PropsWithChildren, useState } from "react";
import apiClient from "../../../api/axios";
import { ROUTES } from "../../../constants/routes";

export interface UserType {
  id: number;
  name: string;
  email: string;
  phone: string | null;
  bio: string | null;
}

interface AuthStateType {
  token: string | null;
  user?: UserType | null;
}

interface ValueType {
  auth: AuthStateType;
  login: Function;
  logout: Function;
  refresh: Function;
}

const defaultValue: ValueType = {
  auth: {
    token: null,
    user: null,
  },
  login: () => {},
  logout: () => {},
  refresh: () => {},
};

const AuthContext = createContext(defaultValue);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [auth, setAuth] = useState<AuthStateType>({ token: null, user: null });

  const login = async (username: string, password: string) => {
    const response = await apiClient.post(ROUTES.login, {
      username,
      password,
    });
    const token = response?.data?.token;
    const user = response?.data?.user;
    setAuth({ token, user });
  };

  const logout = async () => {
    await apiClient.post(ROUTES.logout);
    setAuth({ token: null, user: null });
  };

  const refresh = (token: string, user: UserType) =>
    setAuth((prevState: AuthStateType) => ({
      ...prevState,
      token: token,
      user: user,
    }));

  return (
    <AuthContext.Provider value={{ auth, refresh, logout, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
