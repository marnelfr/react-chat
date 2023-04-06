import ArrowLeft from "../../UI/Svg/ChevronRight";
import React from "react";

interface Props {
  onClick: () => void;
}

const ChatButton = ({ onClick }: Props) => {
  return (
    <div className="col-auto">
      <div
        onClick={onClick}
        className="btn btn-sm btn-icon btn-primary rounded-circle"
      >
        <ArrowLeft />
      </div>
    </div>
  );
};

export default ChatButton;
