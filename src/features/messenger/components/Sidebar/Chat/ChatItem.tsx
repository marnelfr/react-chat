import ChatButton from "./ChatButton";
import React from "react";

type ChatItemProps = {
  title: string;
  summary: string;
};

const ChatItem: React.FC<ChatItemProps> = ({ title, summary }) => {
  return (
    <div className="card border-0">
      <div className="card-body">
        <div className="row align-items-center gx-0">
          <div className="col">
            <h4 className="mb-1">{title}</h4>
            <p>{summary}</p>
          </div>

          <ChatButton />
        </div>
      </div>
    </div>
  );
};

export default ChatItem;
