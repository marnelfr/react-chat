import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    key: "",
  },
  reducers: {
    set(state, action) {
      state.key = action.payload;
    },
  },
});

export const searchActions = searchSlice.actions;

export const selectSearchKey = (state: RootState) => state.search.key;

const searchReducer = searchSlice.reducer;
export default searchReducer;
