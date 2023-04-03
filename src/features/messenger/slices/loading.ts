import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const loadSlice = createSlice({
  name: "load",
  initialState: {
    isLoading: false,
  },
  reducers: {
    set(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
  },
});

export const loadActions = loadSlice.actions;

const loadReducer = loadSlice.reducer;
export default loadReducer;
