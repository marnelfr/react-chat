import React from "react";

type MessageContentProps = {
  message: string;
};

const MessageContent = ({ message }: MessageContentProps) => {
  return (
    <div className="message-content">
      <div className="message-text">
        <p>{message}</p>
      </div>
    </div>
  );
};

export default MessageContent;
