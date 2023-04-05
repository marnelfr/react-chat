import React from "react";
import SidebarItem from "../SidebarItem";
import ChatPlaceholder from "../../UI/Placeholder/Chat";
import ArrowLeft from "../../UI/Svg/ChevronRight";
import ChatButton from "./ChatButton";
import ChatItem from "./ChatItem";
import { useAppSelector } from "../../../../../app/hooks";

type ChatsProps = {
  isActive?: boolean;
};

const Chat: React.FC<ChatsProps> = ({ isActive }) => {
  const chat = useAppSelector((state) => state.chat);

  const activeConversation = chat.conversations.find(
    (conv) => chat.activeChat !== null && conv.chat.id === chat.activeChat.id
  );
  const activeChat = activeConversation?.chat;
  let activeChatItem = (
    <ChatItem title="New conversation" summary="Discover new things with fun" />
  );
  if (activeChat) {
    activeChatItem = (
      <ChatItem title={activeChat.title} summary={activeChat.summary} />
    );
  }

  const oldConversations = chat.conversations.filter(
    (conv) => chat.activeChat === null || conv.chat.id !== chat.activeChat.id
  );
  const oldChatItems = oldConversations.map((conv) => {
    return (
      <ChatItem
        key={conv.chat.createdAt}
        title={conv.chat.title}
        summary={conv.chat.summary}
      />
    );
  });

  return (
    <SidebarItem title="Chats" id="tab-content-chats" isActive={isActive}>
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
        {/*<ChatPlaceholder />*/}
        {/*<ChatPlaceholder />*/}
        {/*<ChatPlaceholder />*/}
      </div>
      {/* List of old charts of the current user*/}
    </SidebarItem>
  );
};

export default Chat;
