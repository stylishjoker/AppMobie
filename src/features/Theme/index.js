import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  color: true,
  background: true,
};
export const themeBackground = createSlice({
  name: "settheme",
  initialState,
  reducers: {
    setColor: (state, action) => {
      state.color = action.payload;
    },
    setBackground: (state, action) => {
      state.background = action.payload;
    },
  },
});

export const { setBackground, setColor } = themeBackground.actions;
export default themeBackground.reducer;
