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
      state.loginid = action.payload.loginid;
      state.portfolioid = action.payload.portfolioid;
    },
    // setPortfolioId: (state, action) => {
    //   state.portfolioid = action.payload.portfolioid;
    // },
    // setLoginId: (state, action) => {
    //   state.loginid = action.payload.loginid;
    // },
    removeUser: (state) => {
      state.loginid = null;
      state.portfolioid = null;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
