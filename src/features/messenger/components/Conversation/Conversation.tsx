import React from "react";
import ChatForm from "./ChatForm";
import Main from "./Main";
import NoMessage from "./NoMessage";
import Content from "./Content";
import ModalProfile from "../Navigation/ModalProfile";

const Conversation = () => {
  let content = <NoMessage />;
  if (Math.floor(Math.random() * 10) > 5) {
    content = <Content />;
  }
  return (
    <Main>
      {content}
      <ChatForm />
      <ModalProfile />
    </Main>
  );
};

export default Conversation;
