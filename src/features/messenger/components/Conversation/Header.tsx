import ChevronLeft from "../UI/Svg/ChevronLeft";
import React, { MouseEventHandler, useCallback } from "react";
import useChat from "../../hooks/use-chat";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { chatActions } from "../../slices/chat";

const Header = () => {
  const chat = useAppSelector((state) => state.chat);
  const dispatch = useAppDispatch();
  const activeConversation = chat.conversations.find(
    (conv) => chat.activeChat !== null && conv.chat.id === chat.activeChat.id
  );
  const activeChatTitle = activeConversation?.chat?.title || "New conversation";

  const handleShowChatList: MouseEventHandler = useCallback(
    (event) => {
      event.preventDefault();
      dispatch(chatActions.setShowChatList(true));
    },
    [dispatch]
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
        <div className="col-4 col-xl-12">
          <div className="row align-items-center text-center text-xl-start">
            {/* Toolbar */}
            <div className="col-xl-6 d-none d-xl-block">
              <div className="row align-items-center justify-content-end gx-6">
                <div className="col-auto">
                  <span className="icon icon-lg text-muted">
                    {/*<RefreshSvg />*/}
                    {activeChatTitle}
                  </span>
                </div>
              </div>
            </div>
            {/* Toolbar */}
          </div>
        </div>
        {/* Content */}

        {/* Mobile: refresher */}
        <div className="col-6 d-xl-none text-end">
          <div className="dropdown">
            <span className="text-muted" role="button" aria-expanded="false">
              <span className="icon icon-lg">
                {/*<RefreshSvg />*/}
                {activeChatTitle}
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
