import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  start: true,
};
export const StartApp = createSlice({
  name: "startapp",
  initialState,
  reducers: {
    setStart: (state, action) => {
      state.start = action.payload;
    },
  },
});
export const { setStart } = StartApp.actions;
export default StartApp.reducer;
