import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NewChatResponse } from "../thunks/chat-thunk";

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
      } else {
        const chat: Chat = {
          id: 0,
          summary: "New conversation",
          title: "Learning new things",
          createdAt: new Date().getTime(),
        };
        const conversation: Conversation = {
          chat,
          chatMessages: [chatMessage],
        };

        state.activeChat = chat;
        state.conversations.push(conversation);
      }
    },
    received(state, action: PayloadAction<Message>) {
      const chatMessage: ChatMessage = {
        message: action.payload,
        type: "in",
      };

      const conversation = state.conversations.find(
        (conv) =>
          state.activeChat !== null && conv.chat.id === state.activeChat.id
      );

      if (conversation) {
        conversation.chatMessages.push(chatMessage);
      }
    },
    newChat(state, action: PayloadAction<NewChatResponse>) {
      const data = action.payload;

      const message: Message = {
        createdAt: data.createdAt,
        finishReason: data.finishReason,
        id: data.id,
        message: data.message,
      };
      const chatMessage: ChatMessage = {
        message,
        type: "in",
      };

      if (!state.activeChat) {
        return;
      }

      const conversation = state.conversations.find(
        (conv) =>
          state.activeChat !== null && conv.chat.id === state.activeChat.id
      );

      if (!conversation) {
        return;
      }

      state.activeChat.id = data.chatId;
      state.activeChat.title = data.title;
      state.activeChat.summary = data.summary;

      conversation.chat.id = data.chatId;
      conversation.chat.title = data.title;
      conversation.chat.summary = data.summary;

      conversation.chatMessages.push(chatMessage);

      // {
      // createdAt: data.createdAt,
      // id: data.chatId,
      // summary: data.summary,
      // title: data.title,
      // };
      // const conversation: Conversation = {
      //   chat,
      //   chatMessages: [chatMessage],
      // };

      // state.activeChat = chat;
      // state.conversations.push(conversation);
    },
    loadChats(state, action) {
      // todo: handle chat load from the backend and add them to the state
    },
  },
});

export const chatActions = chatSlice.actions;

const chatReducer = chatSlice.reducer;
export default chatReducer;
