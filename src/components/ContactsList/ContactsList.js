import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import contactsOperations from "../../redux/contacts/contacts-operations";
// import { getVisibleContacts } from "../../redux/selectors";
import s from "./ContactsList.module.css";
import Button from "../Button";
import contactsSelectors from "../../redux/contacts/contacts-selectors";

const ContactList = () => {
  //   const contacts = useSelector(getVisibleContacts);
  const allContacts = useSelector(contactsSelectors.getAllContacts);
  const contactStatus = useSelector((state) => state.contacts.status);
  const dispatch = useDispatch();

  const onDeleteContact = (contactId) =>
    dispatch(contactsOperations.deleteContact(contactId));

  //   useEffect(() => {
  //     if (contactStatus === "idle") {
  //       dispatch(fetchContacts());
  //     }
  //   }, [dispatch, contactStatus]);
  //   useEffect(() => {
  //     dispatch(contactsOperations.fetchAllContacts());
  //   }, [dispatch]);

  return (
    <>
      <h2>ContactList </h2>
      <div className={s.contactsWrapper}>
        <ul className={s.contactList}>
          {allContacts.map(({ id, name, number }) => (
            <li className={s.item} key={id}>
              <p>
                {name}: {number}
              </p>
              <Button
                text="Delete"
                id="delete"
                type="button"
                onClick={() => onDeleteContact(id)}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ContactList;
