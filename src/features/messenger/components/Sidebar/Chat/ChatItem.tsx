import ChatButton from "./ChatButton";
import React, { MouseEventHandler, useCallback, useState } from "react";
import { ChatType } from "../../../slices/chat";
import { useAppDispatch } from "../../../../../app/hooks";
import { setActiveChat } from "../../../thunks/chat-thunk";

type Props = {
  chat: ChatType;
};

const ChatItem = ({ chat }: Props) => {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const handleClick: MouseEventHandler = useCallback(
    (event) => {
      event.preventDefault();
      setIsLoading(true);
      dispatch(setActiveChat(chat));
    },
    [dispatch, chat]
  );

  return (
    <div className="card border-0">
      <div onClick={handleClick} className="card-body" role="button">
        <div className="row align-items-center gx-0">
          <div className="col">
            <h4 className="mb-1">{chat.title}</h4>
            <p>{chat.summary}</p>
          </div>

          <ChatButton isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
};

export default ChatItem;
