import React from "react";
import AccountProfile from "./AccountProfile";
import MoonSvg from "../../../UI/Svg/Moon";
import SunSvg from "../../../UI/Svg/Sun";
import SettingsItemCard from "../../../UI/Card/Settings/SettingsItemCard";
import SettingsCard from "../../../UI/Card/Settings/SettingsCard";

const Account = () => {
  return (
    <SettingsCard title="Account">
      <AccountProfile />

      <SettingsItemCard title="Appearance" text="Choose light or dark theme">
        <div className="switcher-btn text-reset" title="Themes">
          <span
            className="switcher-icon switcher-icon-dark icon icon-lg d-none"
            data-theme-mode="dark"
          >
            <MoonSvg />
          </span>
          <span
            className="switcher-icon switcher-icon-light icon icon-lg"
            data-theme-mode="light"
          >
            <SunSvg />
          </span>
        </div>
      </SettingsItemCard>
    </SettingsCard>
  );
};

export default Account;
