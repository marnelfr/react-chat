import ArrowLeft from "../../UI/Svg/ArrowLeft";
import React from "react";

const ChatButton = () => {
  return (
    <div className="col-auto">
      <div className="btn btn-sm btn-icon btn-primary rounded-circle">
        <ArrowLeft />
      </div>
    </div>
  );
};

export default ChatButton;
