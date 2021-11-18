import React from "react";
import { connect } from "react-redux";
import phonebookActions from '../redux/actions';
import s from './ContactList.module.css';

function ContactsList({contacts, onDelete}) {
  return (
    <div>
      <ul className={s.list}>
                {contacts.map((contact) => (
                  <li key={contact.id} className={s.list_item}>
                    <span className={s.name}>{contact.name}</span>
                    <span className={s.number}>{contact.number}</span>
                    <button type="button" id={contact.id} onClick={() => onDelete(contact.id)} className={s.button}>Delete</button>
                  </li>
                  
                )
                )}
            </ul>
    </div>)
}

const mapStateToProps = state => {
  const { items, filter } = state.phonebook;
  const avaliableContacts = getAvaliableContacts(items, filter);
  return {
    contacts: avaliableContacts,
  };
};

const mapDispatchToProps = dispatch => ({
  onDelete: (value) => dispatch(phonebookActions.deleteContact(value)),
});

const getAvaliableContacts = (items, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return items.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);