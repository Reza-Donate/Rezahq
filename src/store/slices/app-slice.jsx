import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
name:"app",
initialState:{
    isOpen:false
},
reducer:{

}
})
export const appActions = appSlice.actions
export default appSlice;