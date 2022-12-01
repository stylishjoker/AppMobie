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
        console.log(action.payload);
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
    const res =await axios.post(
      "https://6387529dd9b24b1be3ed076e.mockapi.io/orderProduct",
      data
    );
    return res.data;
  }
);
export const getOrderProducts = createAsyncThunk(
  "order/getproducts",
  async () => {
    console.log("getorder");
    const res = await axios.get(
      "https://6387529dd9b24b1be3ed076e.mockapi.io/orderProduct"
    );
    return res.data;
  }
);
export const remoteOrderProduct = createAsyncThunk(
  "order/remoteproduct",
  async (id) => {
    const res = await axios.delete(
      "https://6387529dd9b24b1be3ed076e.mockapi.io/orderProduct/" + id
    );
    return res.data;
  }
);
