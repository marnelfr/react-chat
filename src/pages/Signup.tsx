import { Link } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import AuthCard from "../features/auth/components/UI/AuthCard";
import AuthFormCard from "../features/auth/components/UI/AuthFormCard";
import SignUpForm from "../features/auth/components/SignUpForm";

const SignupPage = () => {
  return (
    <AuthCard>
      <SignUpForm />

      <div className="text-center mt-8">
        <p>
          Already have an account? <Link to={ROUTES.login}>Sign in</Link>
        </p>
      </div>
    </AuthCard>
  );
};

export default SignupPage;
