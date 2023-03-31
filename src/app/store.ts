import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "../features/messenger/slices/sidebar";

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
