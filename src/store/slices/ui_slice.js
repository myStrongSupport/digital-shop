import { createSlice } from "@reduxjs/toolkit";

const initState = {
  modal: false,
};
const uiSlice = createSlice({
  name: "ui",
  initialState: initState,
  reducers: {
    open(state, actions) {
      state.modal = true;
    },
    close(state, actions) {
      state.modal = false;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
