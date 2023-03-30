import React from "react";
import SidebarItem from "../SidebarItem";
import ChatPlaceholder from "../../UI/Placeholder/Chat";
import ArrowLeft from "../../UI/Svg/ChevronRight";
import ChatButton from "./ChatButton";
import ChatItem from "./ChatItem";

type ChatsProps = {
  isActive?: boolean;
};

const Chat: React.FC<ChatsProps> = ({ isActive }) => {
  return (
    <SidebarItem title="Chats" id="tab-content-chats" isActive={isActive}>
      {/*Current chart / Active chart*/}
      <ChatItem title="Work process" summary="How does things work" />
      {/*Current chart / Active chart*/}

      {/* List of old charts of the current user*/}
      <div className="card-list mt-8">
        <div className="d-flex align-items-center my-4 px-6">
          <small className="text-muted me-auto">Old Chats</small>
        </div>

        <ChatItem
          title="Engineer's life"
          summary="What is the engineer's life"
        />

        <ChatPlaceholder />
        <ChatPlaceholder />
        <ChatPlaceholder />
      </div>
      {/* List of old charts of the current user*/}
    </SidebarItem>
  );
};

export default Chat;
