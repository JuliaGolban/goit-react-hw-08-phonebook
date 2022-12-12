import { useState } from 'react';
import PropTypes from 'prop-types';
import { MdPerson, MdClose, MdEdit } from 'react-icons/md';
import { useDeleteContactMutation } from 'redux/phonebook/operations';
import { Item, Name, Number, IconBtn } from './Contact.styled';
import { ContactModalEdit } from 'components/ContactModalEdit/ContactModalEdit';

export const ContactItem = contact => {
  const { id, name, number } = contact;
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(state => !state);

  return (
    <>
      <Item key={id}>
        <MdPerson size={15} />
        <Name>{name}</Name>
        <Number>{number}</Number>
        <IconBtn aria-label="Edit contact" onClick={toggleModal}>
          <MdEdit size={15} />
        </IconBtn>
        <IconBtn
          aria-label="Delete contact"
          onClick={() => deleteContact(id).unwrap()}
          disabled={isDeleting}
        >
          <MdClose size={15} />
        </IconBtn>
      </Item>
      {isModalOpen && (
        <ContactModalEdit
          onClose={toggleModal}
          onSave={toggleModal}
          contact={contact}
        />
      )}
    </>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.exact({
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
  }),
};
