import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Message {
  id?: string;
  message: string[];
  createdAt: number;
  finishReason?: string;
}

interface Chat {
  id: number;
  title: string;
  summary: string;
  createdAt: number;
}

export interface ChatMessage {
  message: Message;
  type: "out" | "in";
}

interface Conversation {
  chat: Chat;
  chatMessages: ChatMessage[];
}

interface StateType {
  activeChat: Chat | null;
  conversations: Conversation[];
}

const initialState: StateType = {
  activeChat: null,
  conversations: [],
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    send(state, action) {
      const message: Message = {
        message: action.payload
          .split(/\r\n|\r|\n/)
          .map((line: string) => line.trim()),
        createdAt: new Date().getTime(),
      };
      const chatMessage: ChatMessage = {
        message,
        type: "out",
      };

      const conversation = state.conversations.find(
        (conv) =>
          state.activeChat !== null && conv.chat.id === state.activeChat.id
      );
      if (conversation) {
        conversation.chatMessages.push(chatMessage);
      }
    },
    received(state, action: PayloadAction<Message>) {
      const chatMessage: ChatMessage = {
        message: action.payload,
        type: "in",
      };
      console.log(chatMessage);
      const conversation = state.conversations.find(
        (conv) => conv.chat === state.activeChat
      );
      if (conversation) {
        conversation.chatMessages.push(chatMessage);
      }
    },
    loadChats(state, action) {
      // todo: handle chat load from the backend and add them to the state
    },
  },
});

export const chatActions = chatSlice.actions;

const chatReducer = chatSlice.reducer;
export default chatReducer;
