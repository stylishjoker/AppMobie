import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  idUser: null,
};
export const GetUser = createSlice({
  name: "getuser",
  initialState,
  reducers: {
    setIdUser: (state, action) => {
      state.idUser = action.payload;
    },
  },
});

export const { setIdUser } = GetUser.actions;
export default GetUser.reducer;
