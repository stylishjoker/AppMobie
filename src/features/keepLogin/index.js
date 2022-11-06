import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
  userToken: "",
};
export const KeepLogin = createSlice({
  name: "KeepLogin",
  initialState,
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setUserToken: (state, action) => {
      state.userToken = action.payload;
    },
  },
});

export const { setIsLoading, setUserToken } = KeepLogin.actions;
export default KeepLogin.reducer;
