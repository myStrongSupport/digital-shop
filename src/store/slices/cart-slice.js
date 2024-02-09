import { createSlice } from "@reduxjs/toolkit";

const initState = {
  items: [],
  totalAmount: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState: initState,
  reducers: {
    addCart(state, actions) {},
    removeCart() {},
  },
});

export default cartSlice.reducer;
