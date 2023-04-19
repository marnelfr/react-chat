import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store";
import { chatActions, Message } from "../slices/chat";
import { loadActions } from "../slices/loading";

export interface NewChatResponse {
  id: string;
  message: string[];
  createdAt: number;
  finishReason: string;
  chatId: number;
  title: string;
  summary: string;
  question: string;
}

export const sendMessage = (
  responseData: any,
  text: string,
  chat?: number
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return (dispatch) => {
    console.log(responseData);
    if (chat) {
      const lines = responseData.message.split("\n");
      const notEmptyLines = lines.filter((line: string) => line.trim() !== "");
      const data: Message = {
        ...responseData,
        message: notEmptyLines,
      };
      dispatch(chatActions.received(data));
      dispatch(loadActions.set({ key: "send-message", state: false }));
    } else {
      const data = {
        ...responseData,
        message: [responseData.message],
        question: text,
      };

      dispatch(chatActions.newChat(data));
      dispatch(loadActions.set({ key: "send-message", state: false }));
    }
  };
};
