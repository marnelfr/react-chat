import Navigation from "../features/messenger/components/Navigation/Navigation";
import Sidebar from "../features/messenger/components/Sidebar/Sidebar";
import Conversation from "../features/messenger/components/Conversation/Conversation";
import React from "react";

const MessengerPage = () => {
  return (
    <div className="layout overflow-hidden">
      <Navigation />
      <Sidebar />
      <Conversation />
    </div>
  );
};

export default MessengerPage;
