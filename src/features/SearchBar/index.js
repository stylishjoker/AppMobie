import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  input: "",
};
export const SearchResult = createSlice({
  name: "search",
  initialState,
  reducers: {
    setInput: (state, action) => {
      state.input = action.payload;
    },
  },
});
export const { setInput } = SearchResult.actions;
export default SearchResult.reducer;
