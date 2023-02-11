import { createSelector } from "@reduxjs/toolkit";
import selectorsFilter from "../filter/filter-selectors";

const getAllContacts = (state) => state.contacts.items;

const getIsLoading = (state) => state.contacts.isLoading;

export const getVisibleContacts = createSelector(
  [getAllContacts, selectorsFilter.getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
);

const selectors = { getAllContacts, getVisibleContacts, getIsLoading };

export default selectors;
