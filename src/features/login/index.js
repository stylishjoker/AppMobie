import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import BASE_URL from "../../Api/config";

const initialState = {
  account: "",
  password: "",
  avatar: "",
  user: [],
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
    setAvatar: (state, action) => {
      state.avatar = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(RegisterUser.fulfilled, (state, action) => {
        state.user.push(action.payload);
      })
      .addCase(GetUsers.fulfilled, (state, action) => {
        state.user = action.payload;
      });
  },
});

export const GetUsers = createAsyncThunk("user/getusers", async () => {
  const res = await axios.get(BASE_URL + "users");
  return res.data;
});
export const RegisterUser = createAsyncThunk("user/Register", async (data) => {
  const res = await axios.patch(BASE_URL + "/users", data);
  return res.data;
});
export const { setAccount, setPassword, setAvatar } = handleLogin.actions;
export default handleLogin.reducer;
