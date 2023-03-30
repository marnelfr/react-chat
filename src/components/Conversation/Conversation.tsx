import React from "react";
import ChatForm from "./ChatForm";
import MessageSvg from "../UI/Svg/Message";
import Main from "./Main";
import NoMessage from "./NoMessage";
import Content from "./Content";

const Conversation = () => {
  let content = <NoMessage />;
  if (Math.floor(Math.random() * 10) > 5) {
    content = <Content />;
  }

  return (
    <Main>
      {content}
      <ChatForm />
    </Main>
  );
};

export default Conversation;
