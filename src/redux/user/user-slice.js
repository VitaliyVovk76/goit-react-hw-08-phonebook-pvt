import { createSlice } from "@reduxjs/toolkit";
// import { register } from "./user-operations";
import userOperations from "./user-operations";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
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
      .addCase(userOperations.fetchCurrentUser.pending, (state) => {
        state.isFetchingCurrentUser = true;
      })
      .addCase(userOperations.fetchCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isFetchingCurrentUser = false;
      })
      .addCase(userOperations.fetchCurrentUser.rejected, (state) => {
        state.isFetchingCurrentUser = false;
      });
  },
});

export default contactsSlice.reducer;
