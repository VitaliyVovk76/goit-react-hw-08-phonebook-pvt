import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import contactsOperations from "../../redux/contacts/contacts-operations";
import s from "./ContactsList.module.css";
import Title from "../Title";
import Loader from "../Loader";
import LoaderContainer from "../LoaderContainer/LoaderContainer";

import contactsSelectors from "../../redux/contacts/contacts-selectors";

const ContactList = () => {
  const contacts = useSelector(contactsSelectors.getVisibleContacts);
  const contactsStatus = useSelector(contactsSelectors.getIsLoading);

  const location = useLocation();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchAllContacts());
  }, [dispatch]);

  return (
    <>
      <Title text="My contacts" type="second" />
      <LoaderContainer>{contactsStatus === true && <Loader />}</LoaderContainer>

      {contacts.length === 0 && <p>No contacts...</p>}
      <div className={s.contactsWrapper}>
        <ul className={s.contactList}>
          {contacts.map(({ id, name, number }) => (
            <li className={s.item} key={id}>
              <p>
                {name}: {number}
              </p>
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
