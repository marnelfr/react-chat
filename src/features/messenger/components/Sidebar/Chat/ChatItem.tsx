import ChatButton from "./ChatButton";
import React, { MouseEventHandler, useCallback } from "react";
import { chatActions, ChatType } from "../../../slices/chat";
import { useAppDispatch, useAppSelector } from "../../../../../app/hooks";
import { useFetchMessagesQuery } from "../../../slices/chat-api";

type Props = {
  chat: ChatType;
};

const ChatItem = ({ chat }: Props) => {
  const activeConversation = useAppSelector((state) => state.chat);
  const dispatch = useAppDispatch();
  const { setActiveChat } = chatActions;
  const { isLoading, isSuccess, data } = useFetchMessagesQuery(chat.id);

  const handleClick: MouseEventHandler = useCallback(
    (event) => {
      event.preventDefault();
      if (isSuccess) {
        dispatch(setActiveChat({ chat, data }));
      }
    },
    [dispatch, chat, setActiveChat, isSuccess, data]
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
