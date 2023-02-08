import { configureStore } from "@reduxjs/toolkit";

// Slices
import playerSlice from "./playerSlice";
import debugSlice from "./debugSlice";

export const store = configureStore({
  reducer: {
    player: playerSlice,
    debug: debugSlice,
  },
});
