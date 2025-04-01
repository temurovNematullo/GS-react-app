import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { catalogAPI } from "../../API/api";

const initialState = {
  reviews: [],
  limit: 1000,
  page: 1,
};

const reviewsSlice = createSlice({
  name: "reviewsList",
  initialState,
  reducers: {
    setReviews(state, action) {
      state.reviews = action.payload;
    },
    setLimit(state) {
      state.page += 1;
    },
  },
});

export const fetchReviews = createAsyncThunk(
  "catalog/Reviews",
  async (productId, { getState, dispatch }) => {
    try {
      const { limit, page, reviews } = getState().reviewsReducer;
      const data = await catalogAPI.getReviews(limit, page);
      const reviewsData = data.filter(
        (dataReviews) => dataReviews.productId === productId
      );
      if (page === 1) {
        dispatch(setReviews(reviewsData));
      } else {
        dispatch(setReviews([...reviews, ...reviewsData]));
      }
    } catch (error) {
      console.error("ERROR", error);
    }
  }
);

export const postReviews = createAsyncThunk(
  "catalog/AddReviews",
  async (reviewsData, { getState, dispatch }) => {
    try {
      const response = await catalogAPI.postReview(reviewsData);
      dispatch(fetchReviews());
      console.log(response);
    } catch (error) {
      console.error("ERROR", error);
    }
  }
);

export const { setReviews, setLimit } = reviewsSlice.actions;
export default reviewsSlice.reducer;
