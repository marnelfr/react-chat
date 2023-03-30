import React from "react";
import SidebarItem from "../SidebarItem";
import ChartPlaceholder from "../../UI/Placeholder/Chart";
import ArrowLeft from "../../UI/Svg/ArrowLeft";
import ChatButton from "./ChatButton";
import ChatItem from "./ChatItem";

type ChatsProps = {
  isActive?: boolean;
};

const Chat: React.FC<ChatsProps> = ({ isActive }) => {
  return (
    <SidebarItem title="Chats" id="tab-content-chats" isActive={isActive}>
      {/*Current chart / Active chart*/}
      <ChatItem title="Documentation" summary="Setup and build tools" />
      {/*Current chart / Active chart*/}

      {/* List of old charts of the current user*/}
      <div className="card-list mt-8">
        <ChatItem
          title="Engineer's life"
          summary="What is the engineer's life"
        />
        <ChatItem
          title="Engineer's life"
          summary="What is the engineer's life"
        />
        <ChatItem
          title="Engineer's life"
          summary="What is the engineer's life"
        />
        <ChartPlaceholder />
      </div>
      {/* List of old charts of the current user*/}
    </SidebarItem>
  );
};

export default Chat;
