// userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loginid: null,
  portfolioid: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      console.log("action payload : ", action.payload);
      state.loginid = action.payload.loginid;
      console.log("state.loginid : ", state.loginid);
    },
    removeUser: (state) => {
      state.loginid = null;
      state.portfolioid = null;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
