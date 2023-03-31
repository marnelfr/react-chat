import MessageSvg from "../UI/Svg/Message";
import React from "react";

const NoMessage = () => {
  return (
    <div className="mt-15 justify-content-center text-center">
      <div className="mb-6">
        <span className="icon icon-xl text-muted">
          <MessageSvg />
        </span>
      </div>
      <p className="text-muted">
        Start a new conversation, <br /> and learn a much as you can.
      </p>
    </div>
  );
};

export default NoMessage;
