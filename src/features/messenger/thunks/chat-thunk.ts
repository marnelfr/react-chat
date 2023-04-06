import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store";
import { chatActions, Message } from "../slices/chat";
import { loadActions } from "../slices/loading";
import apiClient from "../../../api/fetch";

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
  text: string,
  chat?: number
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    dispatch(chatActions.send(text));
    dispatch(loadActions.set(true));
    const responseData = await apiClient.authPost(chat ? "message" : "chat", {
      text,
      chat,
    });

    if (chat) {
      const lines = responseData.message.split("\n");
      const notEmptyLines = lines.filter((line: string) => line.trim() !== "");
      const data: Message = {
        ...responseData,
        message: notEmptyLines,
      };
      dispatch(chatActions.received(data));
      dispatch(loadActions.set(false));
    } else {
      const data = {
        ...responseData,
        message: [responseData.message],
        question: text,
      };

      dispatch(chatActions.newChat(data));
      dispatch(loadActions.set(false));
    }
  };
};

export const loadChats = (): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {
  return async (dispatch) => {
    const data = await apiClient.authGet("chats");
    console.log(data["hydra:member"]);
    //todo: load chats from the backend and call one of the chatActions.loadChats to add them to redux
  };
};
