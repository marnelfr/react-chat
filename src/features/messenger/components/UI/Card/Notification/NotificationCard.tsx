import React, { ReactNode } from "react";

type SectionProps = {
  title: string;
  children: ReactNode;
};

const NotificationCard: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <div className="card-list">
      <div className="d-flex align-items-center my-4 px-6">
        <small className="text-muted me-auto">{title}</small>
      </div>

      {children}
    </div>
  );
};

export default NotificationCard;
