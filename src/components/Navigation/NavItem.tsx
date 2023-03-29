import MessageSvg from "../UI/Svg/Message";
import React, { ReactNode } from "react";

type NavItemProps = {
  children: ReactNode;
  isBadged?: boolean;
  badgeType?: string;
  totalNotif?: number;
  id: string;
  title: string;
  lastNav?: boolean;
};

const NavItem: React.FC<NavItemProps> = ({
  children,
  isBadged,
  id,
  title,
  totalNotif,
  badgeType,
  lastNav,
}) => {
  return (
    <li
      className={`nav-item ${
        lastNav ? "d-xl-block flex-xl-grow-1" : undefined
      }`}
    >
      {/*add active class if active*/}
      <a
        className="nav-link  py-0 py-lg-8"
        id={id}
        href="#"
        title={title}
        data-bs-toggle="tab"
        role="tab"
      >
        <div className={`icon icon-xl ${isBadged ? "icon-badged" : undefined}`}>
          {children}
          {isBadged && (
            <div className={`badge badge-circle bg-${badgeType}`}>
              <span>{totalNotif}</span>
            </div>
          )}
        </div>
      </a>
    </li>
  );
};

export default NavItem;
