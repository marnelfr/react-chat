import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "../features/messenger/slices/sidebar";
import modalReducer from "../redux/slices/modal";

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    modal: modalReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
