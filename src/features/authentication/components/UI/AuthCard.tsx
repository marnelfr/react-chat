import { ReactNode } from "react";
import AuthFormCard from "./AuthFormCard";

interface AuthProps {
  children: ReactNode;
}

const AuthCard = ({ children }: AuthProps) => {
  return (
    <div className="container">
      <div className="row align-items-center justify-content-center min-vh-100 gx-0">
        <div className="col-12 col-md-6 col-lg-5">{children}</div>
      </div>
    </div>
  );
};

export default AuthCard;
