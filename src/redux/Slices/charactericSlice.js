import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { charactericAPI } from "../../API/api";

const initialState = {
  charactericProduct: [],
};

const charactericSlice = createSlice({
  name: "characteric",
  initialState,
  reducers: {
    setCharactericProduct: (state, action) => {
      state.charactericProduct = action.payload;
    },
  },
});

export const fetchCharactericProduct = createAsyncThunk(
  "characteric/fetchCharactericProduct",
  async ({ id }, { getState, dispatch }) => {
    console.log("Переданный productId:", id);

    try {
      const data = await charactericAPI.getCharacteric();
      const productData = data.find((product) => product.productId === id);
      console.log("DATAA", productData);
      dispatch(setCharactericProduct(productData ? [productData] : []));
    } catch (error) {
      console.error("ERROR", error);
    }
  }
);

export const { setCharactericProduct } = charactericSlice.actions;

export default charactericSlice.reducer;
