import React from "react";

const NavProfile = () => {
  return (
    <li className="nav-item d-none d-xl-block">
      <span className="nav-link p-0 mt-lg-2">
        <div className="avatar avatar-online mx-auto">
          <img
            className="avatar-img"
            src="https://eu.ui-avatars.com/api/?name=GM&rounded=true"
            alt=""
          />
        </div>
      </span>
    </li>
  );
};

export default NavProfile;
