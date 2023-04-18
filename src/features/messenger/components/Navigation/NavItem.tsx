import MessageSvg from "../UI/Svg/Message";
import React, { MouseEventHandler, ReactNode, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { sidebarActions } from "../../slices/sidebar";

type NavItemProps = {
  children: ReactNode;
  isBadged?: boolean;
  badgeType?: string;
  totalNotif?: number;
  id: string;
  title: string;
  tab: string;
  lastNav?: boolean;
  newChat?: boolean;
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
  newChat,
}) => {
  const dispatch = useAppDispatch();
  const activeTab = useAppSelector((state) => state.sidebar.activeTab);

  const clickHandler: MouseEventHandler = useCallback(
    (event) => {
      event.preventDefault();
      dispatch(sidebarActions.setActiveTab(tab));

      if (newChat) {
        // todo: add a new chat
      }
    },
    [dispatch, newChat]
  );

  return (
    <li
      onClick={clickHandler}
      role="button"
      className={`nav-item ${
        lastNav ? "d-xl-block flex-xl-grow-1" : undefined
      }`}
    >
      <div
        className={`nav-link py-0 py-lg-8 ${
          activeTab === tab && !newChat ? "active" : undefined
        }`}
        id={id}
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
      </div>
    </li>
  );
};

export default NavItem;
