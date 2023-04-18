import React, { ReactNode } from "react";
import Search from "./Search";

type SidebarItemProps = {
  title: string;
  children: ReactNode;
  id: string;
  isActive?: boolean;
};

const SidebarItem: React.FC<SidebarItemProps> = ({
  title,
  children,
  id,
  isActive,
}) => {
  return (
    <div
      className={`tab-pane fade h-100 ${isActive ? "show active" : undefined}`}
      id={id}
      role="tabpanel"
    >
      <div className="d-flex flex-column h-100">
        <div className="hide-scrollbar">
          <div className="container py-8">
            {/* Title */}
            <div className="mb-8">
              <h2 className="fw-bold m-0">{title}</h2>
            </div>

            <Search />

            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarItem;
