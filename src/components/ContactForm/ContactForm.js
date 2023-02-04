import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import contactOperations from "../../redux/contacts/contacts-operations";
import contactsSelectors from "../../redux/contacts/contacts-selectors";

import s from "./ContactForm.module.css";
import Button from "../Button";

export default function ContactForm({ text, onClose }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const allContacts = useSelector(contactsSelectors.getAllContacts);

  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        throw new Error(`Тип поля name ${name} не обрабатывается`);
    }
  };

  const hendleSubmit = (event) => {
    event.preventDefault();
    if (checkName(name)) {
      toast(`${name} is alreadi in contacts`);
      return;
    }

    if (name.trim() === "" || number.trim() === "") {
      toast(`Enter the form`);
      return;
    }
    dispatch(contactOperations.addContact({ name, number }));
    reset();
    onClose();
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  const checkName = (newName) =>
    allContacts.find(({ name }) => name === newName);

  return (
    <form className={s.form} onSubmit={hendleSubmit}>
      <label className={s.label}>
        <span>Name</span>

        <input
          className={s.input}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={s.label}>
        <span>Number</span>
        <input
          className={s.input}
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <Button type="submit" id="create" text={text} onClick={hendleSubmit} />
    </form>
  );
}
