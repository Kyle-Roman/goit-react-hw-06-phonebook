import React, { useState } from "react";
import s from './Form.module.css'

export default function Form({onSubmit}) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInput = e => {
    const {name, value} = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  }

  const handleSubmit = e => {
      e.preventDefault();

      onSubmit({ name, number });     

      reset();
    }

  const reset = () => {
    setName('');
    setNumber('');
    }

  return (
    <div className={s.form}>
            <form onSubmit={handleSubmit}>
              <label className={s.label}>Name
                <input
                  type="text"
                  name="name"
                  value={name}
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                  onChange={handleInput}
                  required
                  placeholder='add name...'
                  className={s.input}
              />
              </label>
            <label className={s.label}>Phone number
              <input
                type="tel"
                name="number"
                value={number}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                onChange={handleInput}
                required
                placeholder='add number...'
                className={s.input}
              />
            </label>
              <button type="submit" className={s.button} title='Добавить новый контакт'>Add contact</button>
          </form>
        </div>
  )
}