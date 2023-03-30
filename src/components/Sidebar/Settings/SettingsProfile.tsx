import React from "react";
import ImageSvg from "../../UI/Svg/Image";
import LogoutSvg from "../../UI/Svg/Logout";

const SettingsProfile = () => {
  return (
    <div className="card border-0">
      <div className="card-body">
        <div className="row align-items-center gx-5">
          <div className="col-auto">
            <div className="avatar">
              <img
                src="https://eu.ui-avatars.com/api/?name=GM&rounded=true"
                alt="#"
                className="avatar-img"
              />

              <div className="badge badge-circle bg-secondary border-outline position-absolute bottom-0 end-0">
                <ImageSvg />
              </div>
              <input id="upload-profile-photo" className="d-none" type="file" />
              <label
                className="stretched-label mb-0"
                htmlFor="upload-profile-photo"
              ></label>
            </div>
          </div>
          <div className="col">
            <h5>Marnel Gnacadja</h5>
            <p>marnel.gnacadja@lolly.co</p>
          </div>
          <div className="col-auto">
            <a href="chat-group.html" className="text-muted">
              <div className="icon">
                <LogoutSvg />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsProfile;
