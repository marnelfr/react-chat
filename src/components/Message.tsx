import CheckCircleSvg from "../features/messenger/components/UI/Svg/CheckCircle";
import React from "react";
import AuthFormCard from "../features/auth/components/UI/AuthFormCard";

const Message = () => {
  return (
    <AuthFormCard title="" text="">
      <div className="text-center">
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
  );
};

export default Message;
