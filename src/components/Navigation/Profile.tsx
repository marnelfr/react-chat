import profilPicture from "../../assets/img/1.jpg";
import React from "react";

const Profile = () => {
  return (
    <li className="nav-item d-none d-xl-block">
      <span className="nav-link p-0 mt-lg-2">
        <div className="avatar avatar-online mx-auto">
          <img className="avatar-img" src={profilPicture} alt="" />
        </div>
      </span>
    </li>
  );
};

export default Profile;
