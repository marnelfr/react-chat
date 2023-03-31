import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SIDEBAR } from "../../../constants/sidebar";

interface SidebarState {
  activeTab: string;
}

const initialState: SidebarState = {
  activeTab: SIDEBAR.Chat,
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    set(state, action: PayloadAction<string>) {
      state.activeTab = action.payload;
    },
  },
});

export const sidebarActions = sidebarSlice.actions;

const sidebarReducer = sidebarSlice.reducer;
export default sidebarReducer;
