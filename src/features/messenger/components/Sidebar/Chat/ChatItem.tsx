import ChatButton from "./ChatButton";
import React, { useCallback } from "react";
import { ChatType } from "../../../slices/chat";

type Props = {
  chat: ChatType;
};

const ChatItem = ({ chat }: Props) => {
  const handleClick = useCallback(() => {}, []);

  return (
    <div className="card border-0">
      <div className="card-body">
        <div className="row align-items-center gx-0">
          <div className="col">
            <h4 className="mb-1">{chat.title}</h4>
            <p>{chat.summary}</p>
          </div>

          <ChatButton onClick={handleClick} />
        </div>
      </div>
    </div>
  );
};

export default ChatItem;
