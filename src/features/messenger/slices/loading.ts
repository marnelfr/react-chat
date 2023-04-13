import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store";

interface Loader {
  key: string;
  isLoading: boolean;
  hasError: boolean;
}

interface PayloadType {
  key: string;
  state: boolean;
}

const initialState: Loader[] = [];

const loadSlice = createSlice({
  name: "load",
  initialState,
  reducers: {
    set(state, action: PayloadAction<PayloadType>) {
      const loader = state.find((load) => load.key === action.payload.key);
      if (!loader) {
        state.push({
          key: action.payload.key,
          isLoading: action.payload.state,
          hasError: false,
        });
      } else {
        loader.hasError = false;
        loader.isLoading = action.payload.state;
      }
    },
    setError(state, action: PayloadAction<PayloadType>) {
      const loader = state.find((load) => load.key === action.payload.key);
      if (!loader) return;
      loader.hasError = action.payload.state;
      loader.isLoading = false;
    },
  },
});

export const getLoader = (key: string) => {
  return (state: RootState) => {
    const load = state.load.find((load) => load.key === key);
    if (load) return load;
    return { isLoading: false, hasError: false, key };
  };
};

export const loadActions = loadSlice.actions;

const loadReducer = loadSlice.reducer;
export default loadReducer;
