import React, { ReactNode } from "react";

import MessageHour from "./MessageHour";

type MessageProps = {
  hour: string;
  children: ReactNode;
};

const MessageCard = ({ hour, children }: MessageProps) => {
  return (
    <div className="message-inner">
      <div className="message-body">{children}</div>
      <MessageHour hour={hour} />
    </div>
  );
};

export default MessageCard;
