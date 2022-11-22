import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import BASE_URL from "../../Api/config";
const initialState = {
  status: "idle",
  screens: [],
};
export const GetScreen = createSlice({
  name: "getLaptop",
  initialState,
  reducers: {
    setScreen: (state, action) => {
      state.screens = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getScreens.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getScreens.fulfilled, (state, action) => {
        state.screens = action.payload;
        state.status = "idle";
      });
  },
});
const URL_LINK = BASE_URL + "/screen";
export const getScreens = createAsyncThunk("screens/getscreens", async () => {
  const res = await axios.get(URL_LINK);
  const data = await res.data;
  return data;
});

export const { setScreen } = GetScreen.actions;
export default GetScreen.reducer;
