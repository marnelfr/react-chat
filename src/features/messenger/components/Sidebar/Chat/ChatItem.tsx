import ChatButton from "./ChatButton";
import React, { MouseEventHandler, useCallback, useState } from "react";
import { chatActions, ChatType } from "../../../slices/chat";
import { useAppDispatch } from "../../../../../app/hooks";
import usePrivateAxios from "../../../../auth/hooks/usePrivateAxios";

type Props = {
  chat: ChatType;
};

const ChatItem = ({ chat }: Props) => {
  const dispatch = useAppDispatch();
  const axios = usePrivateAxios();
  const [isLoading, setIsLoading] = useState(false);

  const handleClick: MouseEventHandler = useCallback(
    async (event) => {
      event.preventDefault();
      if (chat.id === 0) return;

      setIsLoading(true);
      const data: any = await axios.get("chats/" + chat.id);
      console.log(data?.data?.questions);
      dispatch(
        chatActions.setActiveChat({ chat, data: data?.data?.questions || [] })
      );
      setIsLoading(false);
      dispatch(chatActions.setShowChatList(false));
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
