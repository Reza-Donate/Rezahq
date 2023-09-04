import { createSlice } from "@reduxjs/toolkit";
export const formSlice = createSlice({
  name: "form",
  initialState: {
    name: "",
    email: "",
    message: "",
    country: "",
    gender: "",
  },
  reducers: {
    updateField: (state, action) => {
      state[action.payload.field] = action.payload.value;
    },
  },
});
export const { updateField, resetForm } = formSlice.actions;
export default formSlice;
