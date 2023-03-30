import SendSvg from "../UI/Svg/Send";
import React from "react";

const ChatForm = () => {
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
      <form className="chat-form rounded-pill bg-dark" data-emoji-form="">
        <div className="row align-items-center gx-0">
          <div className="col">
            <div className="input-group">
              <textarea
                className="form-control px-0 form-control-custom"
                placeholder="Type your message..."
                rows={1}
                data-emoji-input=""
                data-autosize="true"
                style={{
                  overflow: "hidden",
                  overflowWrap: "break-word",
                  resize: "none",
                }}
              ></textarea>
            </div>
          </div>

          <div className="col-auto">
            <button className="btn btn-icon btn-primary rounded-circle ms-5">
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
