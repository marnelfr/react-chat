import React from "react";
import SettingsFormCard from "../../../UI/Card/Settings/SettingsFormCard";

const SecurityPassword = () => {
  return (
    <SettingsFormCard text="Change your password" title="Password">
      <form action="chat-group.html" autoComplete="on">
        <div className="form-floating mb-6">
          <input
            type="password"
            className="form-control"
            id="profile-current-password"
            placeholder="Current Password"
            autoComplete=""
          />
          <label htmlFor="profile-current-password">Current Password</label>
        </div>

        <div className="form-floating mb-6">
          <input
            type="password"
            className="form-control"
            id="profile-new-password"
            placeholder="New password"
            autoComplete=""
          />
          <label htmlFor="profile-new-password">New password</label>
        </div>

        <div className="form-floating mb-6">
          <input
            type="password"
            className="form-control"
            id="profile-verify-password"
            placeholder="Verify Password"
            autoComplete=""
          />
          <label htmlFor="profile-verify-password">Verify Password</label>
        </div>

        <button
          type="button"
          className="btn btn-block btn-lg btn-primary w-100"
        >
          Save
        </button>
      </form>
    </SettingsFormCard>
  );
};

export default SecurityPassword;
