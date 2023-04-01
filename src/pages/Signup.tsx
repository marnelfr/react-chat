import { Link } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import SignUpForm from "../features/authentication/components/SignUpForm";
import AuthFormCard from "../features/authentication/components/UI/AuthFormCard";
import AuthCard from "../features/authentication/components/UI/AuthCard";

const SignupPage = () => {
  return (
    <AuthCard>
      <AuthFormCard title="Sign Up" text="Follow the easy steps">
        <SignUpForm />
      </AuthFormCard>

      <div className="text-center mt-8">
        <p>
          Already have an account? <Link to={ROUTES.login}>Sign in</Link>
        </p>
      </div>
    </AuthCard>
  );
};

export default SignupPage;
