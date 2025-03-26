import { configureStore } from "@reduxjs/toolkit";
import mainPageProductReducer from "./Slices/mainPageProductSlice";
import categories from "./Slices/categoriesSlice";
import catalogCards from "./Slices/catalogCardsSlice";

export const store = configureStore({
  reducer: {
    mainPageProductReducer,
    categories,
    catalogCards,
  },
});
