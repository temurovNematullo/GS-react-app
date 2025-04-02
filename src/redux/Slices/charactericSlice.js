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
    setNewIndexImg(state, action) {
      const { newImg } = action.payload;

      const product = state.charactericProduct[0];
      const oldImg = product.imageIndex;

      product.imageIndex = newImg;
      const index = product.images.findIndex((img) => img === newImg);

      if (index !== -1) {
        product.images[index] = oldImg;
      }
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

export const { setCharactericProduct, setNewIndexImg } =
  charactericSlice.actions;

export default charactericSlice.reducer;
