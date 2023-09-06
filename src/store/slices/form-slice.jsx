import { createSlice } from "@reduxjs/toolkit";
export const formSlice = createSlice({
  name: "form",
  initialState: {
    name: "",
    email: "",
    message: "",
    country: "Select your Country",
    gender: "Select Gender",
  },
  reducers: {
    updateSelect: (state, action) => {
      state[action.payload.field] = action.payload.value;
    },
  
  },
});
export const { updateSelect } = formSlice.actions;
export default formSlice;
