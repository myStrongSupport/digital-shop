import { createSlice } from "@reduxjs/toolkit";

const initState = {
  users: [],
};
const userSlice = createSlice({
  name: "users",
  initialState: initState,
  reducers: {
    addUser(state, action) {
      let user = action.payload;
      state.users.push(user);
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
