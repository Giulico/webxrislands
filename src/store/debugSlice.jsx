import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orbitControls: false,
};

export const debugSlice = createSlice({
  name: "debug",
  initialState,
  reducers: {
    setOrbitControls: (state, action) => {
      state.orbitControls = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setOrbitControls } = debugSlice.actions;

export default debugSlice.reducer;
