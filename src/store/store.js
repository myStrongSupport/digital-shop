import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cart-slice";
import uiSlice from "./slices/ui_slice";
import userSlice from "./slices/user-slice";

const store = configureStore({
  reducer: { cart: cartSlice, ui: uiSlice, user: userSlice },
});

export default store;
