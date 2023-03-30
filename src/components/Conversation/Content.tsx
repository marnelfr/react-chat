import Message from "../UI/Conversation/Message";
import MessageContent from "../UI/Conversation/MessageContent";
import Divider from "../UI/Conversation/Divider";
import Typing from "../UI/Conversation/Typing";
import React from "react";

const Content = () => {
  return (
    <div className="chat-body hide-scrollbar flex-1 h-100">
      <div className="chat-body-inner" style={{ paddingBottom: "87px" }}>
        <div className="py-6 py-lg-12">
          {/* Message */}
          <Message hour="08:45 PM" out={false}>
            <MessageContent
              message="Hey, Marshall! How are you? Can you please change the
                          color theme of the website to pink and purple? Hey,
                          Marshall! How are you? Can you please change the color
                          theme of the website to pink and purple?"
            />
            <MessageContent
              message="Send me the files please. Hey, Marshall! How are you?
                          Can you please change the color theme of the website
                          to pink and purple?"
            />
          </Message>

          <Message hour="08:45 PM" out={true}>
            <MessageContent
              message="Hey, Marshall! How are you? Can you please change the
                          color theme of the website to pink and purple? Hey,
                          Marshall! How are you? Can you please change the color
                          theme of the website to pink and purple?"
            />
          </Message>

          {/* Divider */}
          <Divider>Friday, Sep 20</Divider>

          <Message hour="08:45 PM" out={false}>
            <MessageContent
              message="Hey, Marshall! How are you? Can you please change the
                          color theme of the website to pink and purple? Hey,
                          Marshall! How are you? Can you please change the color
                          theme of the website to pink and purple?"
            />
          </Message>

          <Message hour="08:45 PM" out={true}>
            <MessageContent
              message="Hey, Marshall! How are you? Can you please change the
                          color theme of the website to pink and purple? Hey,
                          Marshall! How are you? Can you please change the color
                          theme of the website to pink and purple?"
            />
            <MessageContent
              message="Send me the files please. Hey, Marshall! How are you?
                          Can you please change the color theme of the website
                          to pink and purple?"
            />
          </Message>

          <Typing />
        </div>
      </div>
    </div>
  );
};

export default Content;
