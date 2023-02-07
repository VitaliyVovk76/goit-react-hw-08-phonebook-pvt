import { createSlice } from "@reduxjs/toolkit";
import contactsOperations from "./contacts-operations";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const hendlePending = (state) => (state.isLoading = true);

const hendleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const hendleSuccess = (state) => {
  state.isLoading = false;
  state.error = null;
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  extraReducers(builder) {
    builder
      //fetch
      .addCase(
        contactsOperations.fetchAllContacts.fulfilled,
        (state, action) => {
          state.items = action.payload;
          hendleSuccess(state);
        }
      )
      .addCase(
        contactsOperations.fetchAllContacts.rejected,
        (state, action) => {
          hendleRejected(state, action);
        }
      )
      .addCase(contactsOperations.fetchAllContacts.pending, (state, action) => {
        hendlePending(state);
      })
      //add
      .addCase(contactsOperations.addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
        hendleSuccess(state);
      })
      .addCase(contactsOperations.addContact.rejected, (state, action) => {
        hendleRejected(state, action);
      })
      .addCase(contactsOperations.addContact.pending, (state) => {
        hendlePending(state);
      })
      //delete
      .addCase(contactsOperations.deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
        hendleSuccess(state);
      })
      .addCase(contactsOperations.deleteContact.rejected, (state, action) => {
        hendleRejected(state, action);
      })
      .addCase(contactsOperations.deleteContact.pending, (state) => {
        hendlePending(state);
      })
      //update
      .addCase(contactsOperations.updateContact.fulfilled, (state) => {
        hendleSuccess(state);
      })
      .addCase(contactsOperations.updateContact.rejected, (state, action) => {
        hendleRejected(state, action);
      })
      .addCase(contactsOperations.updateContact.pending, (state) => {
        hendlePending(state);
      });
  },
});

export default contactsSlice.reducer;
