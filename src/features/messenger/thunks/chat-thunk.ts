import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store";
import { chatActions, Message } from "../slices/chat";
import { loadActions } from "../slices/loading";

export const sendMessage = (
  text: string
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    dispatch(chatActions.send(text));
    dispatch(loadActions.set(true));

    const response = await fetch("http://localhost:8080/api/message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });

    const responseData = await response.json();

    dispatch(loadActions.set(false));

    const data: Message = {
      ...responseData,
      message: responseData.message,
    };
    dispatch(chatActions.received(data));
  };
};
