import { createSlice } from "@reduxjs/toolkit";

const initState = {
  user: null,
  users: [],
};
const userSlice = createSlice({
  name: "users",
  initialState: initState,
  reducers: {
    login(state, action) {
      state.user = action.payload;
    },
    logout(state) {
      state.user = null;
    },
    addUser(state, action) {
      const newUser = action.payload;
      state.users = state.users.concat(newUser);
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
