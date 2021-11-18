import { createAction } from "@reduxjs/toolkit";
import shortid from "shortid";

const addContact = createAction('phonebook/addContact', contact => ({
    payload: {
      id: shortid.generate(),
      name: contact.name,
      number: contact.number
  }
}));

const deleteContact = createAction('phonebook/deleteContact');

const filterContacts = createAction('pphonebook/filterContacts');

const phonebookActions = { addContact, deleteContact, filterContacts };

export default phonebookActions;