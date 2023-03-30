import React, { ReactNode } from "react";
import SidebarItem from "../SidebarItem";
import SettingsProfile from "./SettingsProfile";
import SettingsAccount from "./SettingsAccount";
import SettingsSecurity from "./SettingsSecurity";

type SettingsProps = {
  isActive?: boolean;
};

const Settings: React.FC<SettingsProps> = ({ isActive }) => {
  return (
    <SidebarItem title="Settings" id="tab-content-settings" isActive={isActive}>
      <SettingsProfile />
      <SettingsAccount />
      <SettingsSecurity />
    </SidebarItem>
  );
};

export default Settings;
