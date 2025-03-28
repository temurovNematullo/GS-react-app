import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { mainsectionAPI } from "../../API/api";

const initialState = {
  id: 1,
  mainProducts: [],
};

const mainPAgeProductSlice = createSlice({
  name: "mainPageProduct",
  initialState,

  reducers: {
    setMainProductId(state, action) {
      state.id = action.payload;
    },
    setMainProduct(state, action) {
      state.mainProducts = action.payload;
    },
  },
});

export const fetchMainProducts = createAsyncThunk(
  "mainpage/productMain",
  async (_, { getState, dispatch }) => {
    try {
      const data = await mainsectionAPI.getLocks();
      dispatch(setMainProduct(data));
    } catch (error) {
      console.error("ERROR лять", error);
    }
  }
);

export const { setMainProductId, setMainProduct } =
  mainPAgeProductSlice.actions;

export default mainPAgeProductSlice.reducer;
