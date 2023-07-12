import { createSelector } from "@reduxjs/toolkit";

export const getContacts = state => state.contacts.items;
export const getFilters = state => state.filter;
export const visibleContacts = createSelector(
  [getContacts, getFilters],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => {
      if (contact && contact.name) {
        return contact.name.toLowerCase().includes(normalizedFilter);
      }
      return false;
    });
  }
);