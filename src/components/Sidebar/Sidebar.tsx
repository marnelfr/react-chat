import React from "react";
import Chat from "./Chat/Chat";
import Notification from "./Notification/Notification";
import Settings from "./Settings/Settings";

const Sidebar = () => {
  return (
    <aside className="sidebar bg-light">
      <div className="tab-content h-100" role="tablist">
        <Chat />
        <Notification />
        <Settings isActive />
      </div>
    </aside>
  );
};

export default Sidebar;
