import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { catalogAPI } from "../../API/api";

const initialState = {
  recentlyViewed: [],
};

const recentlyViewedSlice = createSlice({
  name: "recentlyViewed",
  initialState,
  reducers: {
    setRecentlyViewed(state, action) {
      state.recentlyViewed = action.payload;
    },
  },
});

export const putRecentlyCards = createAsyncThunk(
  "recentlyViewed/putRecentlyCards",
  async (recentlyCard, { getState, dispatch }) => {
    const { recentlyViewed } = getState().recentlyViewedReducer;

    try {
      const isAlreadyViwed = recentlyViewed.some(
        (item) => item.productId === recentlyCard.productId
      );
      if (!isAlreadyViwed) {
        const response = await catalogAPI.putCards(recentlyCard);
        console.log(" Ответ от сервера:", response);
      }
    } catch (error) {
      console.error(" Ошибка при отправке:", error);
      throw error;
    }
  }
);

export const getRecentlyViewed = createAsyncThunk(
  "recentlyViewed/getRecentlyViewed",
  async (_, { dispatch }) => {
    try {
      const data = await catalogAPI.getRecentlyViewed();
      dispatch(setRecentlyViewed(data));
    } catch (error) {
      console.error("Ошибка при получении данных:", error);
      throw error;
    }
  }
);

export const { setRecentlyViewed } = recentlyViewedSlice.actions;
export default recentlyViewedSlice.reducer;
