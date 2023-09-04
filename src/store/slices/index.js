import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./app-slice";
import formSlice from "./form-slice";

const store = configureStore({
  reducer: {
    app: appSlice.reducer,
    form: formSlice.reducer,
  },
});
export default store;
