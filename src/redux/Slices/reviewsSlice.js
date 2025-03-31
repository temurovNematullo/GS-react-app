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
    setLimit(state) {
      state.page += 1;
    },
  },
});

export const fetchReviews = createAsyncThunk(
  "catalog/Reviews",
  async (_, { getState, dispatch }) => {
    try {
      const { limit, page, reviews } = getState().reviewsReducer;
      const data = await catalogAPI.getReviews(limit, page);
      if (page === 1) {
        dispatch(setReviews(data));
      } else {
        dispatch(setReviews([...reviews, ...data]));
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
