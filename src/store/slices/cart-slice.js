import { createSlice } from "@reduxjs/toolkit";

const initState = {
  items: [],
  totalAmount: 0,
  totalQuentity: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState: initState,
  reducers: {
    addCart(state, actions) {
      const cart = actions.payload;
      const existingCart = state.items.find((item) => item.id === cart.id);
      // Total Amount and Quentity
      state.totalAmount = state.totalAmount + cart.totalAmount;
      state.totalQuentity = state.totalQuentity + cart.quantity;
      // ....
      if (existingCart) {
        existingCart.quantity = existingCart.quantity + cart.quantity;
        existingCart.totalAmount = existingCart.totalAmount + cart.totalAmount;
      } else {
        state.items.push(cart);
      }
    },
    removeCart(state, actions) {
      const id = actions.payload;
      const existingCart = state.items.find((item) => item.id === id);
      // Total Amount and Quentity
      state.totalAmount = state.totalAmount - +existingCart.price;
      state.totalQuentity = state.totalQuentity - 1;
      // ....
      if (existingCart.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingCart.quantity--;
        existingCart.totalAmount =
          existingCart.totalAmount - existingCart.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
