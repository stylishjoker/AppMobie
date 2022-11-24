import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import BASE_URL from "../../Api/config";
const initialState = {
  status: "idle",
  idUser: [],
};
export const GetUser = createSlice({
  name: "getuser",
  initialState,
  reducers: {
    setIdUser: (state, action) => {
      state.idUser = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.idUser = action.payload;
        state.status = "idle";
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.status = "rejected";
      })
      .addCase(postUser.fulfilled, (state, action) => {
        state.idUser.push(action.payload);
        state.status = "success";
      });
  },
});
const URL_LINK = BASE_URL + "/users";

export const getUsers = createAsyncThunk("users/getusers", async () => {
  try {
    const res = await axios.get(URL_LINK);
    return res.data;
  } catch (error) {
    console.error(error);
  }
});
export const postUser = createAsyncThunk("users/postuser", async (value) => {
  const res = await axios.post(URL_LINK, value);
  return res.data;
});
export const { setIdUser } = GetUser.actions;
export default GetUser.reducer;
