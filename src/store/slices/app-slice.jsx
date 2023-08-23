import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    menuOpen: false,
  },
  reducers: {
    menuHandleClick(state) {
      state.menuOpen = !state.menuOpen;
    },
  },
});
export const appActions = appSlice.actions;
export default appSlice;
