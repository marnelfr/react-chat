import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "../features/messenger/slices/sidebar";
import modalReducer from "../redux/slices/modal";
import { chatApiSlice } from "../features/messenger/slices/chat-api";
import chatReducer from "../features/messenger/slices/chat";

export const store = configureStore({
  reducer: {
    chat: chatReducer,
    modal: modalReducer,
    sidebar: sidebarReducer,
    [chatApiSlice.reducerPath]: chatApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(chatApiSlice.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
