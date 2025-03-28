import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { catalogAPI } from "../../API/api";

const initialState = {
  cards: [],
  status: "",
  page: 1,
  limit: 9,
  totalPage: 1,
  sortBy: "",
  order: "",
  hasMore: true,
};

const catalogCArdsReducer = createSlice({
  name: "catalogCards",
  initialState,

  reducers: {
    setCatalogCardsData: (state, action) => {
      state.cards = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setCurrentPage(state, action) {
      state.page = action.payload;
    },

    setTotalPage(state, action) {
      console.log("Обновляем totalPage:", action.payload);
      state.totalPage = action.payload;
    },
    setParams(state, action) {
      state.sortBy = action.payload.sortBy;
      state.order = action.payload.order;
    },
    setHasMore(state, action) {
      state.hasMore = action.payload;
    },
  },
});

export const fetchTotalPages = createAsyncThunk(
  "catalogCards/fetchTotalPages",
  async (_, { getState, dispatch }) => {
    console.log("fetchTotalPages вызван!");
    try {
      const { limit } = getState().catalogCards;
      console.log("Запрашиваем общее количество записей...");
      const total = await catalogAPI.getTotal();
      const calculatedTotalPage = Math.ceil(total / limit);
      console.log("Total записей:", total);
      console.log("Рассчитанное totalPage:", calculatedTotalPage);
      dispatch(setTotalPage(calculatedTotalPage));
    } catch (error) {
      console.error(error);
      console.log("Ошибка при получении общего количества страниц", error);
    }
  }
);

export const fetchCatalogData = createAsyncThunk(
  "catalogCards/fetchCatalogData",
  async (_, { getState, dispatch }) => {
    try {
      dispatch(setStatus("loading"));

      const { page, limit, totalPage, sortBy, order } = getState().catalogCards;

      // console.log("totalPage перед проверкой:", totalPage);
      // if (totalPage === 1) {
      //   await dispatch(fetchTotalPages());
      // }
      const data = await catalogAPI.getCatalogCards(page, limit, sortBy, order);
      dispatch(setCatalogCardsData(data));
      const hasMoreData = data.length === limit;
      dispatch(setHasMore(hasMoreData));

      //return data для extraReducer если нужно
      dispatch(setStatus("success"));
    } catch (error) {
      console.error("Ошибка запрос не выполнен");
      dispatch(setStatus("error"));
    }
  }
);

export const {
  setCatalogCardsData,
  setStatus,
  setCurrentPage,
  setTotalPage,
  setParams,
  setHasMore,
} = catalogCArdsReducer.actions;

export default catalogCArdsReducer.reducer;
