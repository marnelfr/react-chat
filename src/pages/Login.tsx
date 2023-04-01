import { Link } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import LoginForm from "../features/authentication/components/LoginForm";
import AuthCard from "../features/authentication/components/UI/AuthCard";
import AuthFormCard from "../features/authentication/components/UI/AuthFormCard";

const LoginPage = () => {
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
