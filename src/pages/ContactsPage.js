import { useState } from "react";
import Title from "../components/Title";
import Button from "../components/Button";
import Modal from "../components/Modal";
import ContactForm from "../components/ContactForm";
import ContactsList from "../components/ContactsList";
import Filter from "../components/Filter";

const ContactsPage = () => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal((state) => !state);

  return (
    <>
      <Title text="Phonebook" type="first" />
      <Button
        type="button"
        onClick={() => toggleModal()}
        text="Create contact"
        id="create"
      />
      {showModal && (
        <Modal onClose={toggleModal}>
          <ContactForm text="Add Contact" onClose={toggleModal} />
        </Modal>
      )}
      <Title text="Find contacts by name" type="second" />
      <Filter />
      <ContactsList />
    </>
  );
};

export default ContactsPage;
