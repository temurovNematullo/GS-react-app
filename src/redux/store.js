import { configureStore } from "@reduxjs/toolkit";
import mainPageProductReducer from "./Slices/mainPageProductSlice";
import categories from "./Slices/categoriesSlice";
import catalogCards from "./Slices/catalogCardsSlice";
import popularProductsReducer from "./Slices/popularProductSlice";
import reviewsReducer from "./Slices/reviewsSlice";
import recentlyViewedReducer from "./Slices/recentlyViewedSlice";
import charactericReducer from "./Slices/charactericSlice";

export const store = configureStore({
  reducer: {
    mainPageProductReducer,
    categories,
    catalogCards,
    popularProductsReducer,
    reviewsReducer,
    recentlyViewedReducer,
    charactericReducer,
  },
});
