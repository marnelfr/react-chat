import MessageSvg from "../UI/Svg/Message";
import React, { ReactNode, useCallback } from "react";
import { useAppDispatch } from "../../../../app/hooks";

type NavItemProps = {
  children: ReactNode;
  isBadged?: boolean;
  badgeType?: string;
  totalNotif?: number;
  id: string;
  title: string;
  tab: string;
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
  tab,
}) => {
  const dispatch = useAppDispatch();
  const clickHandler = useCallback(
    (event: MouseEvent) => {
      event.preventDefault();
    },
    [dispatch]
  );

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
