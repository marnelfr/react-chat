import React from "react";
import SettingsFormCard from "../../../UI/Card/Settings/SettingsFormCard";

const AccountProfile = () => {
  return (
    <SettingsFormCard
      text="Change your profile settings"
      title="Profile settings"
    >
      <form>
        <div className="form-floating mb-6">
          <input
            type="text"
            className="form-control"
            id="profile-name"
            placeholder="Name"
          />
          <label htmlFor="profile-name">Name</label>
        </div>

        <div className="form-floating mb-6">
          <input
            type="email"
            className="form-control"
            id="profile-email"
            placeholder="Email address"
          />
          <label htmlFor="profile-email">Email</label>
        </div>

        <div className="form-floating mb-6">
          <input
            type="text"
            className="form-control"
            id="profile-phone"
            placeholder="Phone"
          />
          <label htmlFor="profile-phone">Phone</label>
        </div>

        <div className="form-floating mb-6">
          <textarea
            className="form-control"
            placeholder="Bio"
            id="profile-bio"
            data-autosize="true"
            style={{
              minHeight: "120px",
              overflow: "hidden",
              overflowWrap: "break-word",
              resize: "none",
            }}
          ></textarea>
          <label htmlFor="profile-bio">Bio</label>
        </div>

        <button
          type="submit"
          className="btn btn-block btn-lg btn-primary w-100"
        >
          Save
        </button>
      </form>
    </SettingsFormCard>
  );
};

export default AccountProfile;
