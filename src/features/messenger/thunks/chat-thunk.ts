import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store";
import { chatActions, Message } from "../slices/chat";
import { loadActions } from "../slices/loading";
import apiClient from "../../../helpers/fetch";

export const sendMessage = (
  text: string,
  chat?: string
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    dispatch(chatActions.send(text));
    dispatch(loadActions.set(true));

    const responseData = await apiClient.authPost(
      chat ? "message" : "new/chat",
      { text, chat }
    );

    // todo: update this api to create a new chat and save the question about it and then return the chat and the response
    // const response = await fetch("http://localhost:8080/api/new/chat", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ text }),
    // });
    //
    // const responseData = await response.json();
    //
    dispatch(loadActions.set(false));

    const data: Message = {
      ...responseData,
      message: responseData.message,
    };
    dispatch(chatActions.received(data));
  };
};

export const loadChats = (): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {
  return async (dispatch) => {
    //todo: load chats from the backend and call one of the chatActions.loadChats to add them to redux
  };
};
