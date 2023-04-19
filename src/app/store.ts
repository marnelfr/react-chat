import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "../features/messenger/slices/sidebar";
import modalReducer from "../redux/slices/modal";
import chatReducer from "../features/messenger/slices/chat";
import loadReducer from "../features/messenger/slices/loading";
import searchReducer from "../features/messenger/slices/search";

export const store = configureStore({
  reducer: {
    chat: chatReducer,
    modal: modalReducer,
    sidebar: sidebarReducer,
    load: loadReducer,
    search: searchReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
