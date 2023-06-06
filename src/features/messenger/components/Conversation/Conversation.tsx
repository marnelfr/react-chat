import React from "react";
import ChatForm from "./ChatForm";
import Main from "./Main";
import NoMessage from "./NoMessage";
import Content from "./Content";
import ModalProfile from "../Navigation/ModalProfile";
import { useAppSelector } from "../../../../app/hooks";
import { selectChatMessages } from "../../slices/chat";

const Conversation = () => {
  const chatMessages = useAppSelector(selectChatMessages);
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
