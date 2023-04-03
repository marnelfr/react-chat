import React from "react";
import ChatForm from "./ChatForm";
import Main from "./Main";
import NoMessage from "./NoMessage";
import Content from "./Content";
import ModalProfile from "../Navigation/ModalProfile";
import { useAppSelector } from "../../../../app/hooks";

const Conversation = () => {
  const chatMessages = useAppSelector((state) => state.chat.messages);
  let content = <NoMessage />;
  if (chatMessages.length) {
    content = <Content messages={chatMessages} />;
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
