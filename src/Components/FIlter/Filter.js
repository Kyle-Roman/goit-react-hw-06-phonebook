import React from 'react';
import { connect } from "react-redux";
import phonebookActions from "../redux/actions";
import s from './Filter.module.css';

const Filter = ({ onChange, value }) => {
  return (
    <div className={s.wrapper}>
      <label className={s.label}>Find contact
        <input
          type="text"
          name="name"
          value={value}
          onChange={onChange}
          className={s.input}
          placeholder='find name...'
        />
      </label>
    </div>
      )    
};
  
const mapStateToProps = (state) => ({
  value: state.phonebook.filter,
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (event) =>
    dispatch(phonebookActions.filterContacts(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
