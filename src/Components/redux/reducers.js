import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import phonebookActions from "./actions";

const baseContacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const items = createReducer(baseContacts, {
  [phonebookActions.addContact]: (state, {payload}) => {
    if (state.find((contact) => contact.name === payload.name)) {
      alert(`Контакт ${payload.name} уже существует!`);
      return;
    } else {
      return [...state, payload];
    }
  },
  [phonebookActions.deleteContact]: (state, {payload}) =>
    state.filter((contact) => contact.id !== payload),
});

const filter = createReducer('', {
  [phonebookActions.filterContacts]: (_, {payload}) => payload,
});

export default combineReducers({
  items,
  filter,
});