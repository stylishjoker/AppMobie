import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import BASE_URL from "../../Api/config";
const initialState = {
  status: "idle",
  laptops: [],
};
export const GetLaptop = createSlice({
  name: "getLaptop",
  initialState,
  reducers: {
    setLaptop: (state, action) => {
      state.laptops = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getLaptops.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getLaptops.fulfilled, (state, action) => {
        state.laptops = action.payload;
        state.status = "idle";
      });
  },
});
const URL_LINK = BASE_URL + "/laptops";
export const getLaptops = createAsyncThunk("laptops/getlaptops", async () => {
  const res = await axios.get(URL_LINK);
  const data = await res.data;
  return data;
});

export const { setLaptop } = GetLaptop.actions;
export default GetLaptop.reducer;
