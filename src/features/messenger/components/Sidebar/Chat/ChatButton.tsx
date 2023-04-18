import ArrowLeft from "../../UI/Svg/ChevronRight";
import React from "react";
import Spinner from "../../../../../components/UI/Spinner";

interface Props {
  isLoading: boolean;
}

const ChatButton = ({ isLoading }: Props) => {
  return (
    <div className="col-auto">
      <div className="btn btn-sm btn-icon btn-primary rounded-circle">
        {isLoading ? <Spinner /> : <ArrowLeft />}
      </div>
    </div>
  );
};

export default ChatButton;
