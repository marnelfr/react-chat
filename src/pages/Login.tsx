import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import LoginForm from "../features/authentication/components/LoginForm";
import AuthCard from "../features/authentication/components/UI/AuthCard";
import AuthFormCard from "../features/authentication/components/UI/AuthFormCard";
import { useEffect, useState } from "react";
import { useAuth } from "../features/authentication/context/AuthContext";

const LoginPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const [checked, setChecked] = useState<boolean>(false);

  useEffect(() => {
    if (isAuthenticated) {
      navigate(ROUTES.dashboard);
    } else {
      setChecked(true);
    }
  }, [isAuthenticated, navigate]);

  if (!checked || isAuthenticated === null) {
    // todo: I'm still seeing the login form though ((
    return <p>Loading...</p>;
  }

  return (
    <AuthCard>
      <AuthFormCard title="Sign In" text="Login to your account">
        <LoginForm />
      </AuthFormCard>
      <div className="text-center mt-8">
        <p>
          Don't have an account yet? <Link to={ROUTES.register}>Sign up</Link>
        </p>
        <p>
          <Link to={ROUTES.resetPassword}>Forgot Password?</Link>
        </p>
      </div>
    </AuthCard>
  );
};

export default LoginPage;
