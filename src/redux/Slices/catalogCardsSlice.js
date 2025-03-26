import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { catalogAPI } from "../../API/api";

const initialState = {
  cards: [],
  status: "",
  page: 1,
  limit: 9,
  totalPage: 1,
};

const catalogCArdsReducer = createSlice({
  name: "catalogCards",
  initialState,

  reducers: {
    setCatalogCardsData(state, action) {
      state.cards = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.page = action.payload;
    },
    setTotalPage: (state, action) => {
      state.totalPage = action.payload;
    },
  },
});

export const fetchCatalogData = createAsyncThunk(
  "catalogCards/fetchCatalogData",
  async (_, { getState, dispatch }) => {
    try {
      dispatch(setStatus("loading"));

      const { page, limit, totalPage, status } = getState().catalogCards;

      // if (totalPage === 1) {
      //   const total = await catalogAPI.getTotal();
      //   const calculatedTotalPage = Math.ceil(total / limit);
      //   console.log("Total Pages:", calculatedTotalPage);
      //   dispatch(setTotalPage(calculatedTotalPage));
      // }

      const data = await catalogAPI.getCatalogCards(page, limit);
      console.log("Данные карточек", data);
      console.log("Page:", page);
      console.log("Total Pages:", totalPage);
      console.log("Загруженные данные:", data);

      dispatch(setCatalogCardsData(data));
      dispatch(setStatus("success"));
    } catch (error) {
      console.error("Ошибка запрос не выполнен");
      dispatch(setStatus("error"));
    }
  }
);

export const { setCatalogCardsData, setStatus, setCurrentPage, setTotalPage } =
  catalogCArdsReducer.actions;

export default catalogCArdsReducer.reducer;
