import React, { ReactNode } from "react";

type MessageContentProps = {
  message: string[];
};

const MessageContent = ({ message }: MessageContentProps) => {
  let content: ReactNode = <></>;
  try {
    content = message.map((line) => <div key={line}>{line}</div>);
  } catch (e) {
    console.error(e);
  }
  return (
    <div className="message-content">
      <div className="message-text">{content}</div>
    </div>
  );
};

export default MessageContent;
