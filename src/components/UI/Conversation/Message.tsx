import MessageCard from "./MessageCard";
import React, { ReactNode } from "react";
import image from "../../../assets/img/2.jpg";

type MessageProps = {
  hour: string;
  children: ReactNode;
  out: boolean;
};

const Message = ({ hour, children, out }: MessageProps) => {
  return (
    <div className={`message ${out ? "message-out" : undefined}`}>
      <a
        href="src/components/UI/Conversation/Message#"
        className="avatar avatar-responsive"
      >
        <img className="avatar-img" src={image} alt="avatar" />
      </a>

      <MessageCard hour={hour}>{children}</MessageCard>
    </div>
  );
};

export default Message;
