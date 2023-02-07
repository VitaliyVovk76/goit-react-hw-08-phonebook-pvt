import { createSlice } from "@reduxjs/toolkit";
import contactsOperations from "./contacts-operations";

const initialState = {
  items: [],
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(
        contactsOperations.fetchAllContacts.fulfilled,
        (state, action) => {
          state.items = action.payload;
        }
      )
      .addCase(contactsOperations.addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(contactsOperations.deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      })
      .addCase(contactsOperations.updateContact.fulfilled, (state, action) => {
        console.log(action.payload);
      });
  },
});

export default contactsSlice.reducer;
