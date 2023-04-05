import SendSvg from "../UI/Svg/Send";
import React, { FormEventHandler, useCallback, useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { chatActions } from "../../slices/chat";
import { sendMessage } from "../../thunks/chat-thunk";

const ChatForm = () => {
  const dispatch = useAppDispatch();
  const activeChat = useAppSelector((state) => state.chat.activeChat);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit: FormEventHandler = useCallback(
    (event) => {
      event.preventDefault();
      dispatch(sendMessage(messageRef.current!.value, activeChat?.id));
      messageRef.current!.value = "";
      messageRef.current!.focus();
    },
    [dispatch, messageRef, activeChat]
  );

  return (
    <div className="chat-footer pb-3 pb-lg-7 position-absolute bottom-0 start-0">
      {/* Chat: Files */}
      <div
        className="dz-preview bg-dark"
        id="dz-preview-row"
        data-horizontal-scroll=""
      ></div>
      {/* Chat: Files */}

      {/* Chat: Form */}
      <form
        onSubmit={handleSubmit}
        className="chat-form rounded-pill bg-dark"
        data-emoji-form=""
      >
        <div className="row align-items-center gx-0">
          <div className="col">
            <div className="input-group">
              <textarea
                className="form-control px-0 form-control-custom"
                placeholder="Type your message..."
                rows={1}
                data-emoji-input=""
                data-autosize="true"
                ref={messageRef}
                style={{
                  overflow: "hidden",
                  overflowWrap: "break-word",
                  resize: "none",
                }}
              ></textarea>
            </div>
          </div>

          <div className="col-auto">
            <button
              type="submit"
              className="btn btn-icon btn-primary rounded-circle ms-5"
            >
              <SendSvg />
            </button>
          </div>
        </div>
      </form>
      {/* Chat: Form */}
    </div>
  );
};

export default ChatForm;
