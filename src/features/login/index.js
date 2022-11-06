import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  account: "",
  password: "",
};
export const handleLogin = createSlice({
  name: "login",
  initialState,
  reducers: {
    setAccount: (state, action) => {
      state.account = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
  },
});
export const { setAccount, setPassword } = handleLogin.actions;
export default handleLogin.reducer;
