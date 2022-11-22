import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

export const SaveUser = createSlice({
  name: "saveuser",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});
export const { setUser } = SaveUser.actions;
export default SaveUser.reducer;
