import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const loadSlice = createSlice({
  name: "load",
  initialState: {
    isLoading: false,
    hasError: false,
  },
  reducers: {
    set(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
      state.hasError = false;
    },
    setError(state, action: PayloadAction<boolean>) {
      state.hasError = action.payload;
      state.isLoading = false;
    },
  },
});

export const loadActions = loadSlice.actions;

const loadReducer = loadSlice.reducer;
export default loadReducer;
