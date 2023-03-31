import React from "react";

import TimesSvg from "../UI/Svg/Times";
import PenSvg from "../UI/Svg/Pen";
import MessageSvg from "../UI/Svg/Message";
import NotificationSvg from "../UI/Svg/Notification";
import NavItem from "./NavItem";
import GrearSvg from "../UI/Svg/Grear";
import NavProfile from "./NavProfile";

import image from "../../../../assets/img/logo.png";
import { SIDEBAR } from "../../../../constants/sidebar";

const Navigation = () => {
  return (
    <nav className="navigation d-flex flex-column text-center navbar navbar-light hide-scrollbar">
      <a href="#" title="Messenger" className="d-none d-xl-block mb-6">
        <img style={{ width: 46, height: 46 }} src={image} alt="GmlG Logo" />
      </a>

      {/* Nav items */}
      <ul
        className="d-flex nav navbar-nav flex-row flex-xl-column flex-grow-1 justify-content-between justify-content-xl-center align-items-center w-100 py-4 py-lg-2 px-lg-3"
        role="tablist"
      >
        {/* Invisible item to center nav vertically */}
        <li className="nav-item d-none d-xl-block invisible flex-xl-grow-1">
          <a className="nav-link py-0 py-lg-8" href="#" title="">
            <div className="icon icon-xl">
              <TimesSvg />
            </div>
          </a>
        </li>

        <NavItem id="tab-create-chat" title="Create chat" tab={SIDEBAR.Chat}>
          <PenSvg />
        </NavItem>

        <NavItem id="tab-chats" title="Chats" tab={SIDEBAR.Chat}>
          <MessageSvg />
        </NavItem>

        <NavItem
          id="tab-notification"
          title="Notification"
          isBadged
          totalNotif={2}
          badgeType="warning"
          tab={SIDEBAR.Notification}
        >
          <NotificationSvg />
        </NavItem>

        <NavItem id="tab-settings" title="Settings" tab={SIDEBAR.Settings}>
          <GrearSvg />
        </NavItem>

        {/* Profile: show the profile modal */}
        <NavProfile />
      </ul>
    </nav>
  );
};

export default Navigation;
