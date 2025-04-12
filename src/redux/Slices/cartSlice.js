import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalPrice: null,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addTocards(state, action) {
      const newItem = action.payload;

      const existingItem = state.cartItems.some(
        (item) => item.productId === newItem.productId
      );
      if (!existingItem) {
        state.cartItems.push({ ...newItem, quantity: 1 });
      }
      if (existingItem) {
        const existingItemIndex = state.cartItems.findIndex(
          (item) => item.productId === newItem.productId
        );
        state.cartItems[existingItemIndex].quantity += 1;
      }
    },
    addQuantity(state, action) {
      const productId = action.payload;
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.productId === productId
      );
      if (existingItemIndex !== -1) {
        state.cartItems[existingItemIndex].quantity += 1;
      }
    },
    deleteQuantity(state, action) {
      const productId = action.payload;
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.productId === productId
      );
      if (existingItemIndex !== -1) {
        if (state.cartItems[existingItemIndex].quantity > 1) {
          state.cartItems[existingItemIndex].quantity -= 1;
        }
      }
    },
    deleteItem(state, action) {
      const productId = action.payload;
      const deleteItemIndex = state.cartItems.findIndex(
        (item) => item.productId === productId
      );
      state.cartItems.splice(deleteItemIndex, 1);
    },
  },
});

export const { addTocards, addQuantity, deleteQuantity, deleteItem } =
  cartSlice.actions;
export default cartSlice.reducer;
