import { createContext, PropsWithChildren, useState } from "react";

interface DefaultValueType {
  auth: any;
  setAuth: Function;
}

const defaultValue: DefaultValueType = {
  auth: {},
  setAuth: () => {},
};

const AuthContext = createContext(defaultValue);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [auth, setAuth] = useState({});

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
