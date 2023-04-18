import MessageCard from "./MessageCard";
import React, { ReactNode } from "react";

type MessageProps = {
  hour: string;
  children: ReactNode;
  out: boolean;
};

const Message = ({ hour, children, out }: MessageProps) => {
  const image = out
    ? "https://eu.ui-avatars.com/api/?name=GM&rounded=true"
    : "https://eu.ui-avatars.com/api/?name=IA&rounded=true";

  return (
    <div className={`message ${out ? "message-out" : undefined}`}>
      <a href="#" className="avatar avatar-responsive">
        <img className="avatar-img" src={image} alt="avatar" />
      </a>

      <MessageCard hour={hour}>{children}</MessageCard>
    </div>
  );
};

export default Message;
