import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    menuOpen: false,
    countryMenu: false,
    genderMenu: false,
    share: false,
  },
  reducers: {
    menuHandleClick(state) {
      state.menuOpen = !state.menuOpen;
    },
    selectHandleClick(state, action) {
      if (action.payload === "Select your Country") {
        state.countryMenu = !state.countryMenu;
        state.genderMenu = false;
      } else  {
        state.genderMenu = !state.genderMenu;
        state.countryMenu = false;
      }
      // state.countryMenu ="false"
    },
  
  },
});
export const { menuHandleClick, selectHandleClick } = appSlice.actions;
export default appSlice;
