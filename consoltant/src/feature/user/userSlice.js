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
      if (action.payload.loginid) {
        state.loginid = action.payload.loginid;
      } else {
        state.portfolioid = action.payload.portfolioid;
      }
      console.log("state.loginid : ", state.loginid);
      console.log("state.portfolioid : ", state.portfolioid);
    },
    removeUser: (state) => {
      state.loginid = null;
      state.portfolioid = null;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
