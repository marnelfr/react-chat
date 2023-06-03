import SendSvg from "../UI/Svg/Send";
import React, {
  ChangeEvent,
  ChangeEventHandler,
  FormEventHandler,
  KeyboardEventHandler,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { sendMessage } from "../../thunks/chat-thunk";
import { chatActions } from "../../slices/chat";
import { loadActions } from "../../slices/loading";
import apiClient from "../../../../api/axios";
import usePrivateAxios from "../../../auth/hooks/usePrivateAxios";
import Modal from "../../../../components/UI/Modal/Modal";
import { modalActions } from "../../../../redux/slices/modal";
import ModalImpression from "./ModalImpression";

const ChatForm = () => {
  const dispatch = useAppDispatch();
  const activeChat = useAppSelector((state) => state.chat.activeChat);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [message, setMessage] = useState("");
  const axios = usePrivateAxios();

  useEffect(() => {
    messageRef.current!.focus();
  }, []);

  useEffect(() => {
    messageRef.current!.focus();
  }, [activeChat]);

  const sendNewMessage = useCallback(async () => {
    const text = messageRef.current!.value;
    const chat = typeof activeChat?.id === "string" ? 0 : activeChat?.id;

    dispatch(chatActions.send(text));
    dispatch(loadActions.set({ key: "send-message", state: true }));

    try {
      const responseData = await axios.post(chat ? "message" : "chat", {
        text,
        chat,
      });
      dispatch(sendMessage(responseData?.data, text, chat));
    } catch (e: any) {
      if (e?.response?.status === 400) {
        if (e?.response?.data?.feedback === false) {
          dispatch(modalActions.show("modal-impression"));
        } else if (e?.response?.data?.feedback === true) {
          dispatch(modalActions.show("modal-subscription"));
        }
      }
    }
  }, []);

  const handleSubmit: FormEventHandler = useCallback(
    async (event) => {
      event.preventDefault();
      await sendNewMessage();
    },
    [dispatch, activeChat]
  );

  const handleChange: ChangeEventHandler = useCallback(
    (event: ChangeEvent<HTMLTextAreaElement>) => {
      setMessage(event.target.value);
    },
    []
  );

  const handleKeyDown: KeyboardEventHandler = useCallback(
    async (event) => {
      if (event.shiftKey && event.code === "Enter") return;

      if (event.code === "Enter") {
        await sendNewMessage();
      }
    },
    [dispatch, activeChat]
  );

  const handleKeyUp: KeyboardEventHandler = useCallback((event) => {
    if (!event.shiftKey && event.code === "Enter") {
      setMessage("");
    }
  }, []);

  return (
    <div className="chat-footer pb-3 pb-lg-7 position-absolute bottom-0 start-0">
      <ModalImpression />
      {/* Chat: Files */}
      <div
        className="dz-preview bg-dark"
        id="dz-preview-row"
        data-horizontal-scroll=""
      ></div>
      {/* Chat: Files */}

      {/* Chat: Form */}
      <form
        ref={formRef}
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
                onChange={handleChange}
                value={message}
                ref={messageRef}
                onKeyDown={handleKeyDown}
                onKeyUp={handleKeyUp}
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
