import { createSlice } from "@reduxjs/toolkit";

export interface Message {
  id?: string;
  message: string;
  createdAt: number;
  finishReason?: string;
}

interface ChatMessage {
  message: Message;
  type: "out" | "in";
}

interface StateType {
  messages: ChatMessage[];
}

const initialState: StateType = {
  messages: [],
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    send(state, action) {
      const message: Message = {
        message: action.payload,
        createdAt: new Date().getTime(),
      };
      const chatMessage: ChatMessage = {
        message,
        type: "out",
      };
      state.messages.push(chatMessage);
    },
  },
});

export const chatActions = chatSlice.actions;

const chatReducer = chatSlice.reducer;
export default chatReducer;
