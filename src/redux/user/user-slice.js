import { createSlice } from "@reduxjs/toolkit";
// import { register } from "./user-operations";
import userOperations from "./user-operations";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

const contactsSlice = createSlice({
  name: "user",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(userOperations.register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(userOperations.logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(userOperations.logOut.fulfilled, (state, action) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(userOperations.fetchCurrentUser.fulfilled, (state, action) => {
        console.log(action.payload);
        state.user = action.payload;
        state.isLoggedIn = true;
      });
  },
});

export default contactsSlice.reducer;
