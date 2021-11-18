import React from 'react';
import Form from './Components/Form/Form';
import Contacts from './Components/ContactList/ContactsList';
import Filter from './Components/FIlter/Filter';
import s from './App.module.css';

export default function App() {

    return (
      <div className={s.app}>
        <h1 className={s.title}>Phonebook</h1>
        <Form />
        <h2 className={s.title}>Contacts</h2>
        <Filter />
        <Contacts />
      </div>)
    
  };
   