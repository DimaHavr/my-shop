import { createSlice } from "@reduxjs/toolkit";
import {
  fetchContacts,
  addContact,
  deleteContact,
  updateContact,
} from "./operations.js";

const pending = (state) => {
  state.isLoading = true;
};

const rejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, pending)
      .addCase(addContact.pending, pending)
      .addCase(deleteContact.pending, pending)
      .addCase(updateContact.pending, pending)
      .addCase(fetchContacts.rejected, rejected)
      .addCase(addContact.rejected, rejected)
      .addCase(deleteContact.rejected, rejected)
      .addCase(updateContact.rejected, rejected)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.contacts.findIndex(
          (contact) => contact.id === action.payload.id
        );
        state.contacts.splice(index, 1);
      })
      .addCase(updateContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.contacts.findIndex(
          (contact) => contact.id === action.payload.id
        );
        state.contacts[index] = action.payload;
      });
  },
});
