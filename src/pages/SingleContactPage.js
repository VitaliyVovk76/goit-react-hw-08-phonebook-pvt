import { useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import contactsSelectonrs from "../redux/contacts/contacts-selectors";
import contactsOperations from "../redux/contacts/contacts-operations";
import Button from "../components/Button";
import Modal from "../components/Modal";
import ContactFormUpdate from "../components/ContactFormUpdate";

const SingleContactPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const backLinkHref = location.state?.from ?? "/";
  const contactId = location.state.contactId;
  const contacts = useSelector(contactsSelectonrs.getAllContacts);
  const searchContact = contacts.find((contact) => contact.id === contactId);
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal((state) => !state);

  const onDeleteContact = (contactId) => {
    dispatch(contactsOperations.deleteContact(contactId));
    navigate("/contacts");
  };

  return (
    <>
      <Link to={backLinkHref}>Back</Link>
      {searchContact && (
        <div>
          <p>
            {searchContact.name}: {searchContact.number}
          </p>
          <Button
            text="Delete"
            id="delete"
            type="button"
            onClick={() => onDeleteContact(searchContact.id)}
          />
          <Button
            text="Update"
            id="update"
            type="button"
            onClick={() => toggleModal()}
          />
          {showModal && (
            <Modal onClose={toggleModal}>
              <ContactFormUpdate
                text="Update Contact"
                onClose={toggleModal}
                id={contactId}
              />
            </Modal>
          )}
        </div>
      )}
    </>
  );
};

export default SingleContactPage;
