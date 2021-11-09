import React from "react";
import s from './ContactList.module.css';


export default function ContactsList({contacts, onDelete}) {
  return (
    <div>
      <ul className={s.list}>
                {contacts.map((contact) => (
                  <li key={contact.id} className={s.list_item}>
                    <span className={s.name}>{contact.name}</span>
                    <span className={s.number}>{contact.number}</span>
                    <button type="button" onClick={() => onDelete(contact.id)} className={s.button}>Delete</button>
                  </li>
                  
                )
                )}
            </ul>
    </div>)
}
