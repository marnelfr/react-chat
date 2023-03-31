import React from "react";
import Chat from "./Chat/Chat";
import Notification from "./Notification/Notification";
import Settings from "./Settings/Settings";
import { useAppSelector } from "../../../../app/hooks";
import { SIDEBAR } from "../../../../constants/sidebar";

const Sidebar = () => {
  const activeTab = useAppSelector((state) => state.sidebar.activeTab);

  return (
    <aside className="sidebar bg-light">
      <div className="tab-content h-100" role="tablist">
        <Chat isActive={activeTab === SIDEBAR.Chat} />
        <Notification isActive={activeTab === SIDEBAR.Notification} />
        <Settings isActive={activeTab === SIDEBAR.Settings} />
      </div>
    </aside>
  );
};

export default Sidebar;
