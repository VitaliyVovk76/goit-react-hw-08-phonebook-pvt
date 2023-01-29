import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import contactOperations from "../../redux/contacts/contacts-operations";
import contactsSelectors from "../../redux/contacts/contacts-selectors";
import { toggleModal } from "../../redux/modal/modal-slice";
import { getModal } from "../../redux/modal/modal-selectors";
import s from "./ContactForm.module.css";
import Button from "../Button";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const allContacts = useSelector(contactsSelectors.getAllContacts);
  const showModal = useSelector(getModal);

  const dispatch = useDispatch();

  const handleChange = (event) => {
    if (event.currentTarget.name === "name") {
      setName(event.currentTarget.value);
    }
    if (event.currentTarget.name === "number") {
      setNumber(event.currentTarget.value);
    }
  };

  const hendleSubmit = (event) => {
    event.preventDefault();
    // if (checkName(name)) {
    //   alert(`${name} is alreadi in contacts`);
    //   reset();
    //   return;
    // }
    if (name && number) {
      dispatch(contactOperations.addContact({ name, number }));
      dispatch(toggleModal(showModal));
    }
    reset();
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  //   const checkName = (newName) =>
  //     allContacts.find(({ name }) => name === newName);

  return (
    // <form className={s.contactForm} onSubmit={hendleSubmit}>
    //   <label className={s.formLabel}>
    //     Name
    //     <input
    //       className={s.formInput}
    //       type="text"
    //       name="name"
    //       pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    //       title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
    //       required
    //       value={name}
    //       onChange={hendleChange}
    //     />
    //   </label>
    //   <label className={s.formLabel}>
    //     <span>Number</span>
    //     <input
    //       className={s.formInput}
    //       type="tel"
    //       name="number"
    //       pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
    //       title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
    //       required
    //       value={number}
    //       onChange={hendleChange}
    //     />
    //   </label>

    //   <button className={s.formButton} type="submit">
    //     Add contact
    //   </button>
    // </form>
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
      <Button
        type="submit"
        id="create"
        text="Add contact"
        onClick={hendleSubmit}
      />
    </form>
  );
}
