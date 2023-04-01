import { Link } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import AuthFormCard from "../features/authentication/components/UI/AuthFormCard";
import AuthCard from "../features/authentication/components/UI/AuthCard";
import ResetPasswordForm from "../features/authentication/components/ResetPasswordForm";

const ResetPasswordPage = () => {
  return (
    <AuthCard>
      <AuthFormCard
        title="Password Reset"
        text="Enter your email to reset password"
      >
        <ResetPasswordForm />
      </AuthFormCard>
      <div className="text-center mt-8">
        <p>
          Remember your password? <Link to={ROUTES.login}>Sign in</Link>
        </p>
      </div>
    </AuthCard>
  );
};

export default ResetPasswordPage;
