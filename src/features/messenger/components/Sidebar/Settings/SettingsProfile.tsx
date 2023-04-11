import React, { MouseEventHandler, useCallback, useContext } from "react";
import ImageSvg from "../../UI/Svg/Image";
import LogoutSvg from "../../UI/Svg/Logout";
import {
  useAuth,
  UserType,
} from "../../../../authentication/context/AuthContext";
import { modalActions } from "../../../../../redux/slices/modal";
import { useAppDispatch } from "../../../../../app/hooks";

const SettingsProfile = () => {
  const { auth, logout } = useAuth();
  const user = JSON.parse(auth.userInfo!) as UserType;
  const dispatch = useAppDispatch();

  const handleLogout: MouseEventHandler = useCallback(
    (event) => {
      event.preventDefault();
      logout();
      dispatch(modalActions.hide());
    },
    [dispatch, logout]
  );

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
            <h5>{user.name}</h5>
            <p>{user.email}</p>
          </div>
          <div className="col-auto">
            <div role="button" onClick={handleLogout} className="text-muted">
              <div className="icon">
                <LogoutSvg />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsProfile;
