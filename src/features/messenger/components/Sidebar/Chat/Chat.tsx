import React, { useEffect } from "react";
import SidebarItem from "../SidebarItem";
import ChatPlaceholder from "../../UI/Placeholder/Chat";
import ChatItem from "./ChatItem";
import { useAppDispatch, useAppSelector } from "../../../../../app/hooks";
import { useFetchChatQuery } from "../../../slices/chat-api";
import { chatActions, ChatType } from "../../../slices/chat";

type ChatsProps = {
  isActive?: boolean;
};

const Chat: React.FC<ChatsProps> = ({ isActive }) => {
  const chat = useAppSelector((state) => state.chat);
  const dispatch = useAppDispatch();
  const { isLoading, isSuccess, data = [] } = useFetchChatQuery("");

  useEffect(() => {
    if (isSuccess) {
      dispatch(chatActions.loadChats(data));
    }
  }, [isSuccess, data, dispatch]);

  const activeConversation = chat.conversations.find(
    (conv) => chat.activeChat !== null && conv.chat.id === chat.activeChat.id
  );
  const activeChat = activeConversation?.chat;
  const fakeChat: ChatType = {
    createdAt: 0,
    id: 0,
    summary: "Discover new things with fun",
    title: "New conversation",
  };
  let activeChatItem = <ChatItem chat={fakeChat} />;
  if (activeChat) {
    activeChatItem = <ChatItem chat={activeChat} />;
  }

  const oldConversations = chat.conversations.filter(
    (conv) => chat.activeChat === null || conv.chat.id !== chat.activeChat.id
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
          {/*Current chart / Active chart*/}
          {activeChatItem}
          {/*Current chart / Active chart*/}

          {/* List of old charts of the current user*/}
          <div className="card-list mt-8">
            {oldConversations.length && (
              <div className="d-flex align-items-center my-4 px-6">
                <small className="text-muted me-auto">Old Chats</small>
              </div>
            )}

            {oldChatItems}
          </div>
          {/* List of old charts of the current user*/}
        </>
      )}
    </SidebarItem>
  );
};

export default Chat;
