import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import contactsSelectors from "../redux/contacts/contacts-selectors";
import contactsOperations from "../redux/contacts/contacts-operations";
import Title from "../components/Title";
import Button from "../components/Button";
import Modal from "../components/Modal";
import ContactForm from "../components/ContactForm";
import ContactsList from "../components/ContactsList";
import { toggleModal } from "../redux/modal/modal-slice";
import { getModal } from "../redux/modal/modal-selectors";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const showModall = useSelector(getModal);
  //   const contacts = useSelector(contactsSelectors.getAllContacts);
  useEffect(() => {
    dispatch(contactsOperations.fetchAllContacts());
  }, [dispatch]);

  return (
    <>
      <Title text="Contacts Page" type="first" />
      <Button
        type="button"
        onClick={() => dispatch(toggleModal(showModall))}
        text="Create contact"
        id="create"
      />
      {showModall && (
        <Modal>
          <ContactForm />
        </Modal>
      )}
      <ContactsList />
    </>
  );
};

export default ContactsPage;
