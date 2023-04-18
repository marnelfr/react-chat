import LoginForm from "../features/auth/components/LoginForm";
import AuthCard from "../features/auth/components/UI/AuthCard";
import AuthFormCard from "../features/auth/components/UI/AuthFormCard";
import { Link } from "react-router-dom";
import { ROUTES } from "../constants/routes";

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
