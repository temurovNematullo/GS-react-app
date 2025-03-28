import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { catalogAPI } from "../../API/api";

const initialState = {
  reviews: [],
  limit: 3,
  page: 1,
};

const reviewsSlice = createSlice({
  name: "reviewsList",
  initialState,
  reducers: {
    setReviews(state, action) {
      state.reviews = action.payload;
    },
  },
});

export const fetchReviews = createAsyncThunk(
  "catalog/Reviews",
  async (_, { getState, dispatch }) => {
    try {
      const { limit, page } = getState().reviewsReducer;
      const data = await catalogAPI.getReviews(limit, page);
      dispatch(setReviews(data));
    } catch (error) {
      console.error("ERROR", error);
    }
  }
);

export const { setReviews } = reviewsSlice.actions;
export default reviewsSlice.reducer;
