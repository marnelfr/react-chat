import Navigation from "../components/Navigation/Navigation";
import Sidebar from "../components/Sidebar/Sidebar";
import Conversation from "../components/Conversation/Conversation";
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
