import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import BASE_URL from "../../Api/config";
const initialState = {
  status: "",
  infoProduct: {},
  products: [],
  orderProducts: [],
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
  extraReducers: (builder) => {
    builder
      .addCase(postOrderProduct.fulfilled, (state, action) => {
        state.orderProducts.push(action.payload);
      })
      .addCase(getOrderProducts.fulfilled, (state, action) => {
        state.orderProducts = action.payload;
      })
      .addCase(remoteOrderProduct.fulfilled, (state, action) => {
        state.orderProducts.pop(action.payload);
        state.status = "deleted";
      });
  },
});

export const { setProducts, setInfoProduct } = GetProducts.actions;
export default GetProducts.reducer;
export const postOrderProduct = createAsyncThunk(
  "order/postProduct",
  async (data) => {
    const res = await axios.post(BASE_URL + "/orderProducts", data);
    return res.data;
  }
);
export const getOrderProducts = createAsyncThunk(
  "order/getproducts",
  async () => {
    const res = await axios.get(BASE_URL + "/orderProducts");
    return res.data;
  }
);
export const remoteOrderProduct = createAsyncThunk(
  "order/remoteproduct",
  async (id) => {
    const res = await axios.delete(BASE_URL + "/orderProducts/" + id);
    return res.data;
  }
);
