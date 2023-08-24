import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    menuOpen: false,
  },
  reducers: {
    menuHandleClick(state) {
      state.menuOpen = !state.menuOpen;
      if (state) {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }
    },
  },
});
export const appActions = appSlice.actions;
export default appSlice;
