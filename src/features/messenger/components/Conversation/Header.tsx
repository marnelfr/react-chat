import ChevronLeft from "../UI/Svg/ChevronLeft";
import RefreshSvg from "../UI/Svg/Refresh";
import React, { MouseEventHandler, useCallback } from "react";

type HeaderProps = {
  onShowChatList: () => void;
};

const Header = ({ onShowChatList }: HeaderProps) => {
  const handleShowChatList: MouseEventHandler = useCallback(
    (event) => {
      event.preventDefault();
      onShowChatList();
    },
    [onShowChatList]
  );

  return (
    <div className="chat-header border-bottom py-4 py-lg-7">
      <div className="row align-items-center">
        {/* Mobile: show chat list */}
        <div className="col-2 d-xl-none">
          <span
            onClick={handleShowChatList}
            className="icon icon-lg text-muted"
            data-toggle-chat=""
          >
            <ChevronLeft />
          </span>
        </div>
        {/* Mobile: show chat list */}

        {/* Content */}
        <div className="col-8 col-xl-12">
          <div className="row align-items-center text-center text-xl-start">
            {/* Toolbar */}
            <div className="col-xl-6 d-none d-xl-block">
              <div className="row align-items-center justify-content-end gx-6">
                <div className="col-auto">
                  <span className="icon icon-lg text-muted">
                    <RefreshSvg />
                  </span>
                </div>
              </div>
            </div>
            {/* Toolbar */}
          </div>
        </div>
        {/* Content */}

        {/* Mobile: refresher */}
        <div className="col-2 d-xl-none text-end">
          <div className="dropdown">
            <span className="text-muted" role="button" aria-expanded="false">
              <span className="icon icon-lg">
                <RefreshSvg />
              </span>
            </span>
          </div>
        </div>
        {/* Mobile: refresher */}
      </div>
    </div>
  );
};

export default Header;
