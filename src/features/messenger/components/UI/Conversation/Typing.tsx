import React from "react";

const Typing = () => {
  return (
    <div className="message">
      <a
        href="#"
        data-bs-toggle="modal"
        data-bs-target="#modal-user-profile"
        className="avatar avatar-online avatar-responsive"
      >
        <img
          className="avatar-img"
          src="https://eu.ui-avatars.com/api/?name=IA&rounded=true"
          alt=""
        />
      </a>

      <div className="message-inner">
        <div className="message-body">
          <div className="message-content">
            <div className="message-text">
              <p>
                Loading
                <span className="typing-dots">
                  <span>.</span>
                  <span>.</span>
                  <span>.</span>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Typing;
