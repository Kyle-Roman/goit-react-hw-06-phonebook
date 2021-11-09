import React, { useState, useEffect } from 'react';
import shortid from 'shortid';
import Form from './Components/Form/Form';
import Contacts from './Components/ContactList/ContactsList';
import Filter from './Components/FIlter/Filter';
import s from './App.module.css';

const baseContacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ];

export default function App() {

  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem("contacts")) ?? baseContacts
  });

  const [filter, setFilter] = useState('')  

  const onFormSubmit = contactsData => {
    const contact = {
      id: shortid.generate(),
      name: contactsData.name,
      number: contactsData.number,
    }
    return (contacts.find(contact => contact.name === contactsData.name))
      ? alert(`Контакт ${contactsData.name} уже существует!`)
      : setContacts([contact, ...contacts])
  }
  
  const deleteContact = (contactId) => {
    setContacts(contacts.filter(contact => contact.id !== contactId)
    )
  }
 
  const  handleFilterChange = e => {
    setFilter(e.currentTarget.value)
  }

  const handleFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
   }
  
  const filteredContacts = handleFilteredContacts();
  
  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts))
  }, [contacts]) 


    return (
      <div className={s.app}>
        <h1 className={s.title}>Phonebook</h1>
        <Form onSubmit={onFormSubmit} />
        <h2 className={s.title}>Contacts</h2>
        <Filter value={filter} onChange={handleFilterChange}/>
        <Contacts contacts={filteredContacts} onDelete={deleteContact}/>
      </div>)
    
  };
   