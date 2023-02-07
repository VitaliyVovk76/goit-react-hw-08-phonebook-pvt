import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const fetchAllContacts = createAsyncThunk(
  "contacts/fetchAllContacts",
  async () => {
    try {
      const { data } = await axios.get("/contacts");
      return data;
    } catch {
      //обработать ошибук
    }
  }
);

const addContact = createAsyncThunk("contacts/addContact", async (contact) => {
  try {
    const { data } = await axios.post("/contacts", contact);
    return data;
  } catch {
    //обработать ошибку
  }
});

const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId) => {
    try {
      const { data } = await axios.delete("/contacts/".concat(contactId));
      return data;
    } catch {
      //обработать ошибк
    }
  }
);

const updateContact = createAsyncThunk(
  "contacts/updateContact",
  async (contact) => {
    const { id, name, number } = contact;
    try {
      const { data } = await axios.patch("/contacts/".concat(id), {
        name,
        number,
      });
      return data;
    } catch {
      //обработать ошибк
    }
  }
);

const operations = {
  fetchAllContacts,
  addContact,
  deleteContact,
  updateContact,
};

export default operations;
