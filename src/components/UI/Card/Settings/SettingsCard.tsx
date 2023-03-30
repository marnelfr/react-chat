import React, { ReactNode } from "react";

type SecurityCardProps = {
  title: string;
  children: ReactNode;
};

const SettingsCard = ({ title, children }: SecurityCardProps) => {
  return (
    <div className="mt-8">
      <div className="d-flex align-items-center my-4 px-6">
        <small className="text-muted me-auto">{title}</small>
      </div>

      <div className="card border-0">
        <div className="card-body py-2">
          <div className="accordion accordion-flush">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default SettingsCard;
