import Message from "../UI/Conversation/Message";
import MessageContent from "../UI/Conversation/MessageContent";
import Divider from "../UI/Conversation/Divider";
import Typing from "../UI/Conversation/Typing";
import React, { useEffect, useRef } from "react";
import { ChatMessage } from "../../slices/chat";
import { useAppSelector } from "../../../../app/hooks";
import { getLoader } from "../../slices/loading";

interface ContentProps {
  messages: ChatMessage[];
}

const Content = ({ messages }: ContentProps) => {
  const load = useAppSelector(getLoader("send-message"));

  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    contentRef.current!.scrollTo(0, contentRef.current!.scrollHeight);
  });
  const conversation = messages.map((message) => (
    <Message
      hour="08:45 PM"
      key={message.message.createdAt}
      out={message.type === "out"}
    >
      <MessageContent message={message.message.message} />
    </Message>
  ));
  return (
    <div ref={contentRef} className="chat-body hide-scrollbar flex-1 h-100">
      <div className="chat-body-inner" style={{ paddingBottom: "87px" }}>
        <div className="py-6 py-lg-12">
          {conversation}

          <Divider>Friday, Sep 20</Divider>

          {load.isLoading && <Typing />}
        </div>
      </div>
    </div>
  );
};

export default Content;
