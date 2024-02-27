import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cart-slice";
import uiSlice from "./slices/ui_slice";

const store = configureStore({
  reducer: { cart: cartSlice, ui: uiSlice },
});

export default store;
