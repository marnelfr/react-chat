import React from "react";
import SecurityPassword from "./SecurityPassword";
import SettingsItemCard from "../../../UI/Card/Settings/SettingsItemCard";
import SettingsCard from "../../../UI/Card/Settings/SettingsCard";

const Security = () => {
  return (
    <SettingsCard title="Security">
      <SecurityPassword />

      <SettingsItemCard
        title="Two-step verifications"
        text="Enable two-step verifications"
      >
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            id="accordion-security-check-1"
          />
          <label
            className="form-check-label"
            htmlFor="accordion-security-check-1"
          ></label>
        </div>
      </SettingsItemCard>
    </SettingsCard>
  );
};

export default Security;
