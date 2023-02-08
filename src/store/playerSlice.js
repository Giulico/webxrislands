import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  newPosition: "",
  hasGun: false,
};

export const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    set: (state, action) => {
      state.newPosition = JSON.stringify(action.payload);
    },
    addGun: (state) => {
      state.hasGun = true;
    },
    dropGun: (state) => {
      state.hasGun = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { set, addGun, dropGun } = playerSlice.actions;

export default playerSlice.reducer;
