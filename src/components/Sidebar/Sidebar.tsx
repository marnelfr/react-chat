import React from "react";
import Chats from "./Chats/Chats";
import Notification from "./Notification/Notification";
import Settings from "./Settings/Settings";

const Sidebar = () => {
  return (
    <aside className="sidebar bg-light">
      <div className="tab-content h-100" role="tablist">
        <Chats isActive />
        <Notification />
        <Settings />
      </div>
    </aside>
  );
};

export default Sidebar;
