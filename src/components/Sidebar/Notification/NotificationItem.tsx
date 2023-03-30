import React, { ReactNode } from "react";

type NotificationItemProps = {
  title: string;
  time: string;
  content: string;
  svg: ReactNode;
  svgType: string; //warning, primary, danger
  subSvg: ReactNode;
};

const NotificationItem: React.FC<NotificationItemProps> = ({
  title,
  time,
  content,
  svg,
  subSvg,
  svgType,
}) => {
  return (
    <div className="card border-0 mb-5">
      <div className="card-body">
        <div className="row gx-5">
          <div className="col-auto">
            {/* Avatar */}
            <a href="chat-group.html" className="avatar">
              <span className={`avatar-text bg-${svgType}`}>{svg}</span>

              <div
                className={`badge badge-circle bg-${svgType} border-outline position-absolute bottom-0 end-0`}
              >
                {subSvg}
              </div>
            </a>
          </div>

          <div className="col">
            <div className="d-flex align-items-center mb-2">
              <h5 className="me-auto mb-0">
                <a href="chat-group.html">{title}</a>
              </h5>
              <span className="extra-small text-muted ms-2">{time}</span>
            </div>

            <div className="d-flex">
              <div className="me-auto">{content}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationItem;
