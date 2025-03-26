import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { mainsectionAPI } from "../../API/api";

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    categories: [],
    page: 1,
    limits: 8,
    status: "",
    hasMore: true,
  },
  reducers: {
    resetCategories: (state) => {
      state.categories = [];
      state.page = 1;
      state.hasMore = true;
    },
    loadMoreCategories: (state) => {
      if (state.hasMore) {
        state.page += 1;
      }
    },
    setDataCategories: (state, action) => {
      state.categories = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setHasMore: (state, action) => {
      state.hasMore = action.payload;
    },
  },
});

export const fetchCategories = createAsyncThunk(
  "categories/fetchcategories",
  async (_, { getState, dispatch, rejectWithValue }) => {
    try {
      dispatch(setStatus("loading"));

      const { page, limits, categories } = getState().categories;

      const data = await mainsectionAPI.getCategories(page, limits);

      if (!data || !Array.isArray(data)) {
        throw new Error("Invalid data format");
      }

      const hasMoreData = data.length === limits;
      dispatch(setHasMore(hasMoreData));

      if (page === 1) {
        dispatch(setDataCategories(data));
      } else {
        dispatch(setDataCategories([...categories, ...data]));
      }

      dispatch(setStatus("success"));
    } catch (error) {
      console.error("Ошибка: что-то пошло не так", error);
      dispatch(setStatus("error"));
      return rejectWithValue(error.message);
    }
  }
);

//dispatch(setDataCategories([...categories, ...data]));

export const {
  resetCategories,
  loadMoreCategories,
  setDataCategories,
  setStatus,
  setHasMore,
} = categoriesSlice.actions;
export default categoriesSlice.reducer;
