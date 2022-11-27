import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  infoProduct: {},
  products: [],
};

export const GetProducts = createSlice({
  name: "getproducts",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setInfoProduct: (state, action) => {
      state.infoProduct = action.payload;
    },
  },
});

export const { setProducts, setInfoProduct } = GetProducts.actions;
export default GetProducts.reducer;
