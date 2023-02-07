import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import contactsOperations from "../../redux/contacts/contacts-operations";
import s from "./ContactsList.module.css";
import Title from "../Title";
import Button from "../Button";

import contactsSelectors from "../../redux/contacts/contacts-selectors";

const ContactList = () => {
  const contacts = useSelector(contactsSelectors.getVisibleContacts);
  const contactStatus = useSelector((state) => state.contacts.status);
  const location = useLocation();

  const dispatch = useDispatch();

  const onDeleteContact = (contactId) =>
    dispatch(contactsOperations.deleteContact(contactId));

  //   useEffect(() => {
  //     if (contactStatus === "idle") {
  //       dispatch(fetchContacts());
  //     }
  //   }, [dispatch, contactStatus]);
  useEffect(() => {
    dispatch(contactsOperations.fetchAllContacts());
  }, [dispatch]);

  return (
    <>
      <Title text="My contacts" type="second" />
      {contacts.length === 0 && <p>No contacts...</p>}
      <div className={s.contactsWrapper}>
        <ul className={s.contactList}>
          {contacts.map(({ id, name, number }) => (
            <li className={s.item} key={id}>
              <p>
                {name}: {number}
              </p>
              {/* <Button
                text="Delete"
                id="delete"
                type="button"
                onClick={() => onDeleteContact(id)}
              /> */}
              <Link
                to={`/contacts/${id}`}
                state={{ from: location, contactId: id }}
              >
                View Contact
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ContactList;
