import { createSlice } from "@reduxjs/toolkit";

interface ModalState {
  isDisplayed: boolean;
}

const initialState: ModalState = {
  isDisplayed: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    show(state) {
      state.isDisplayed = true;
    },
    hide(state) {
      state.isDisplayed = false;
    },
  },
});

export const modalActions = modalSlice.actions;

const modalReducer = modalSlice.reducer;
export default modalReducer;
