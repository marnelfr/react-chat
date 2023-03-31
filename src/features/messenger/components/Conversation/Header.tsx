import ChevronLeft from "../UI/Svg/ChevronLeft";
import RefreshSvg from "../UI/Svg/Refresh";
import React, { MouseEventHandler, useCallback } from "react";

type HeaderProps = {
  onShowChatList: () => void;
};

const Header = ({ onShowChatList }: HeaderProps) => {
  const ShowChatListHandler: MouseEventHandler = useCallback(
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
          <a
            onClick={ShowChatListHandler}
            className="icon icon-lg text-muted"
            href="#"
            data-toggle-chat=""
          >
            <ChevronLeft />
          </a>
        </div>
        {/* Mobile: show chat list */}

        {/* Content */}
        <div className="col-8 col-xl-12">
          <div className="row align-items-center text-center text-xl-start">
            {/* Toolbar */}
            <div className="col-xl-6 d-none d-xl-block">
              <div className="row align-items-center justify-content-end gx-6">
                <div className="col-auto">
                  <a href="#" className="icon icon-lg text-muted">
                    <RefreshSvg />
                  </a>
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
            <a
              className="text-muted"
              href="#"
              role="button"
              aria-expanded="false"
            >
              <div className="icon icon-lg">
                <RefreshSvg />
              </div>
            </a>
          </div>
        </div>
        {/* Mobile: refresher */}
      </div>
    </div>
  );
};

export default Header;
