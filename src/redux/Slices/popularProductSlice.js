import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { mainsectionAPI } from "../../API/api";

const initialState = {
  products: [],
  page: 1,
  limits: 4,
};

const PopularProductReducer = createSlice({
  name: "popularProduct",
  initialState,

  reducers: {
    setPopularProduct: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const fetchPopularProduct = createAsyncThunk(
  "mainpage/popularProducts",
  async (_, { getState, dispatch }) => {
    try {
      const data = await mainsectionAPI.getPopularProduct();
      dispatch(setPopularProduct(data));
    } catch (error) {
      console.error("ERROR", error);
    }
  }
);

export const { setPopularProduct } = PopularProductReducer.actions;
export default PopularProductReducer.reducer;
