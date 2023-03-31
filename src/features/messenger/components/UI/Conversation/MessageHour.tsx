import React from "react";

type MessageHourProps = {
  hour: string;
};

const MessageHour = ({ hour }: MessageHourProps) => {
  return (
    <div className="message-footer">
      <span className="extra-small text-muted">{hour}</span>
    </div>
  );
};

export default MessageHour;
