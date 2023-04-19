import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NewChatResponse } from "../thunks/chat-thunk";

export interface Message {
  id?: string;
  message: string[];
  createdAt: number;
  finishReason?: string;
}

export interface ChatType {
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
  chat: ChatType;
  chatMessages: ChatMessage[];
}

interface StateType {
  activeChat: ChatType | null;
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
        const chat: ChatType = {
          id: 0,
          title: "New conversation",
          summary: "Discover new things with fun",
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
      state.conversations = action.payload["hydra:member"].map(
        (chat: ChatType) => {
          const oldChat: ChatType = {
            createdAt: new Date(chat.createdAt).getTime(),
            id: chat.id,
            summary: chat.summary,
            title: chat.title,
          };
          const conversation: Conversation = {
            chat: oldChat,
            chatMessages: [],
          };
          return conversation;
        }
      );
    },
    setActiveChat(state, action) {
      if (action.payload.chat.id > 0) {
        if (state.activeChat !== null && state.activeChat.id > 0) {
          const activeChat = state.conversations.findIndex(
            (conv) => conv.chat.id === state.activeChat!.id
          );
          if (!activeChat) {
            state.conversations = [
              ...state.conversations,
              {
                chat: state.activeChat,
                chatMessages: action.payload.data,
              },
            ];
          }
        }
        state.activeChat = action.payload.chat;

        const conversation = state.conversations.find(
          (conv) =>
            state.activeChat !== null && conv.chat.id === state.activeChat.id
        );

        if (!conversation) {
          return;
        }

        action.payload.data.map((question: any) => {
          const qMessage: Message = {
            createdAt: question.createdAt,
            id: question["@id"],
            message: question.text
              .split(/\r\n|\r|\n/)
              .map((line: string) => line.trim()),
          };
          const aMessage: Message = {
            createdAt: question.answer.createdAt,
            id: question.answer["@id"],
            message: question.answer.text
              .split(/\r\n|\r|\n/)
              .map((line: string) => line.trim()),
            finishReason: question.answer?.finishReason,
          };
          const questionMessage: ChatMessage = {
            message: qMessage,
            type: "out",
          };
          const answerMessage: ChatMessage = {
            message: aMessage,
            type: "in",
          };
          conversation.chatMessages.push(questionMessage);
          conversation.chatMessages.push(answerMessage);
        });
      }
    },
  },
});

export const chatActions = chatSlice.actions;

const chatReducer = chatSlice.reducer;
export default chatReducer;
