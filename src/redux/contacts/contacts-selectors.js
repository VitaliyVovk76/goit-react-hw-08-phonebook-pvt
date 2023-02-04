import { createSelector } from "@reduxjs/toolkit";
import selectorsFilter from "../filter/filter-selectors";

const getAllContacts = (state) => state.contacts.items;

export const getVisibleContacts = createSelector(
  [getAllContacts, selectorsFilter.getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
);

const selectors = { getAllContacts, getVisibleContacts };

export default selectors;
