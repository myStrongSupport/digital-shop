import { createSlice } from "@reduxjs/toolkit";

const initState = {
  items: [],
  totalAmount: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState: initState,
  reducers: {
    addCart(state, actions) {
      const cart = actions.payload;
      const existingCart = state.items.find((item) => item.id === cart.id);
      state.totalAmount = state.totalAmount + cart.totalAmount;
      if (existingCart) {
        existingCart.quantity = existingCart.quantity + cart.quantity;
        existingCart.totalAmount = existingCart.totalAmount + cart.totalAmount;
      } else {
        state.items.push(cart);
      }
    },
    removeCart() {},
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
