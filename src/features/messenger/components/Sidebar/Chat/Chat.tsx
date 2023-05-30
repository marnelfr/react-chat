import React, { useEffect, useState } from "react";
import SidebarItem from "../SidebarItem";
import ChatPlaceholder from "../../UI/Placeholder/Chat";
import ChatItem from "./ChatItem";
import { useAppDispatch, useAppSelector } from "../../../../../app/hooks";
import { chatActions, ChatType, selectLiveId } from "../../../slices/chat";
import usePrivateAxios from "../../../../auth/hooks/usePrivateAxios";
import { ROUTES } from "../../../../../constants/routes";
import { selectSearchKey } from "../../../slices/search";

type ChatsProps = {
  isActive?: boolean;
};

const Chat: React.FC<ChatsProps> = ({ isActive }) => {
  const chat = useAppSelector((state) => state.chat);
  const liveId = useAppSelector(selectLiveId);
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const axios = usePrivateAxios();
  const searchKey = useAppSelector(selectSearchKey).toLowerCase();

  useEffect(() => {
    const loadCharts = async () => {
      const response = await axios.get(ROUTES.chats);
      dispatch(chatActions.loadChats(response?.data));
    };
    loadCharts().finally(() => {
      setIsLoading(false);
    });
  }, [dispatch]);

  const activeConversation = chat.conversations.find(
    (conv) => chat.activeChat !== null && conv.chat.id === chat.activeChat.id
  );
  const activeChat = activeConversation?.chat;
  const fakeChat: ChatType = {
    createdAt: new Date().getTime(),
    id: liveId,
    summary: "Discover new things with fun",
    title: "New conversation",
  };
  let activeChatItem = <ChatItem chat={fakeChat} />;
  if (activeChat) {
    activeChatItem = <ChatItem chat={activeChat} />;
  }

  const oldConversations = chat.conversations.filter(
    (conv) =>
      (chat.activeChat === null || conv.chat.id !== chat.activeChat.id) &&
      (conv.chat.title.toLowerCase().includes(searchKey) ||
        conv.chat.summary.toLowerCase().includes(searchKey))
  );
  const oldChatItems = oldConversations.map((conv) => {
    return <ChatItem key={conv.chat.createdAt} chat={conv.chat} />;
  });

  return (
    <SidebarItem title="Chats" id="tab-content-chats" isActive={isActive}>
      {isLoading && (
        <>
          <ChatPlaceholder />
          <div className="card-list mt-8">
            <div className="d-flex align-items-center my-4 px-6">
              <small className="text-muted me-auto">Old Chats</small>
            </div>
            <ChatPlaceholder />
            <ChatPlaceholder />
            <ChatPlaceholder />
          </div>
        </>
      )}

      {!isLoading && (
        <>
          {activeChatItem}

          {/* List of old charts of the current user*/}
          <div className="card-list mt-8">
            {!!oldConversations.length && (
              <div className="d-flex align-items-center my-4 px-6">
                <small className="text-muted me-auto">Old Chats</small>
              </div>
            )}

            {oldChatItems}
          </div>
        </>
      )}
    </SidebarItem>
  );
};

export default Chat;
