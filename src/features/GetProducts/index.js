import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const GetProducts = createSlice({
  name: "getproducts",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { setProducts } = GetProducts.actions;
export default GetProducts.reducer;
