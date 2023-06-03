import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface ModalStateType {
  id: string;
  isDisplayed: boolean;
}

interface StateType {
  modals: ModalStateType[];
}

const initialState: StateType = {
  modals: [
    { id: "modal-profile", isDisplayed: false },
    { id: "modal-impression", isDisplayed: false },
    { id: "modal-subscription", isDisplayed: false },
  ],
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    show(state, action) {
      const modal = state.modals.find(
        (mod: ModalStateType) => mod.id === action.payload
      );
      if (!!modal) {
        modal.isDisplayed = true;
      }
    },
    hide(state, action) {
      const modal = state.modals.find(
        (mod: ModalStateType) => mod.id === action.payload
      );
      if (!!modal) {
        modal.isDisplayed = false;
      }
    },
  },
});

export const modalActions = modalSlice.actions;

const modalReducer = modalSlice.reducer;
export default modalReducer;
