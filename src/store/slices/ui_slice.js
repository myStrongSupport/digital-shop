import { createSlice } from "@reduxjs/toolkit";

const initState = {
  modal: false,
  searching: false,
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
    toggleSearch(state, actions) {
      state.searching = !state.searching;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
