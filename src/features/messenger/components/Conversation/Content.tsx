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
  let oldDay: string | null;
  const load = useAppSelector(getLoader("send-message"));
  const activeChatId = useAppSelector((state) => state.chat.activeChat?.id);
  console.log(activeChatId);

  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    contentRef.current!.scrollTo(0, contentRef.current!.scrollHeight);
  }, [activeChatId]);

  const conversation = messages.map((message) => {
    const date = new Date(message.message.createdAt);

    const dateString = date.toLocaleDateString();
    const day = dateString !== oldDay ? dateString : null;
    if (day !== null) oldDay = day;

    const hour =
      date.getHours() +
      ":" +
      date.getMinutes().toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      });

    // todo: do we really need to have such of a so complicated key?
    const key =
      message.type +
      activeChatId +
      (message.message?.id || message.message.createdAt.toFixed(2));
    console.log(key);
    return (
      <Message day={day} hour={hour} key={key} out={message.type === "out"}>
        <MessageContent message={message.message.message} />
      </Message>
    );
  });

  return (
    <div ref={contentRef} className="chat-body hide-scrollbar flex-1 h-100">
      <div className="chat-body-inner" style={{ paddingBottom: "87px" }}>
        <div className="py-6 py-lg-12">
          {conversation}

          {load.isLoading && <Typing />}
        </div>
      </div>
    </div>
  );
};

export default Content;
