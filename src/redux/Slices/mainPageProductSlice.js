import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: 1,
  name: "",
  for: "",
  description: "",
  features: "",
  price: {
    current: null,
    old: null,
    currency: "",
  },
  imageUrl: [],
};

const mainPAgeProductSlice = createSlice({
  name: "mainPageProduct",
  initialState,

  reducers: {
    setMainProductId(state, action) {
      state.id = action.payload;
    },
    setMainProduct(state, action) {
      state.id = action.payload;
      state.description = action.payload;
      state.features = action.payload;
      state.for = action.payload;
      state.name = action.payload;
      state.price.currency = action.payload;
      state.price.old = action.payload;
      state.price.current = action.payload;
      state.imageUrl = action.payload;
    },
  },
});

export const { setMainProductId, setMainProduct } =
  mainPAgeProductSlice.actions;

export default mainPAgeProductSlice.reducer;
