import React, { ReactNode } from "react";

type ItemCardProps = {
  title: string;
  text: string;
  children: ReactNode;
};

const SettingsItemCard: React.FC<ItemCardProps> = ({
  title,
  text,
  children,
}) => {
  return (
    <div className="accordion-item">
      <div className="accordion-header">
        <div className="row align-items-center">
          <div className="col">
            <h5>{title}</h5>
            <p>{text}</p>
          </div>
          <div className="col-auto">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default SettingsItemCard;
