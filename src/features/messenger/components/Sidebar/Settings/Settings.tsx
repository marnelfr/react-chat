import React, { ReactNode } from "react";
import SidebarItem from "../SidebarItem";
import SettingsProfile from "./SettingsProfile";
import Account from "./Account/Account";
import Security from "./Security/Security";

type SettingsProps = {
  isActive?: boolean;
};

const Settings: React.FC<SettingsProps> = ({ isActive }) => {
  return (
    <SidebarItem title="Settings" id="tab-content-settings" isActive={isActive}>
      <SettingsProfile />
      <Account />
      <Security />
    </SidebarItem>
  );
};

export default Settings;
