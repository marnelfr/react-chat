import { Link } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import AuthCard from "../features/auth/components/UI/AuthCard";
import AuthFormCard from "../features/auth/components/UI/AuthFormCard";
import SignUpForm from "../features/auth/components/SignUpForm";
import NotificationSvg from "../features/messenger/components/UI/Svg/Notification";
import React from "react";
import CheckCircleSvg from "../features/messenger/components/UI/Svg/CheckCircle";

const MessagePage = () => {
  return (
    <AuthCard>
      <AuthFormCard title="" text="">
        <div className="text-center ">
          <h1>Success</h1>
          <div className="m-10">
            <CheckCircleSvg />
          </div>
          <div className="mt-4">
            <p>Thank you for signing up!</p>
            <p>
              We sent you a message. Please, confirm your email to activate your
              account.
            </p>
          </div>
        </div>
      </AuthFormCard>

      <div className="text-center mt-8">
        <p>
          Already have an account? <Link to={ROUTES.login}>Sign in</Link>
        </p>
      </div>
    </AuthCard>
  );
};

export default MessagePage;
