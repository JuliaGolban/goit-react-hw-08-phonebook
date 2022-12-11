import React from 'react';
import PropTypes from 'prop-types';
// import { useDispatch } from 'react-redux';
import { MdPerson, MdClose } from 'react-icons/md';
// import { deleteContact } from 'redux/phonebook/operations';
import { useDeleteContactMutation } from 'redux/phonebook/operations';
import { Item, Name, Number, DeleteIconBtn } from './ContactItem.styled';

export const ContactItem = ({ id, name, number }) => {
  // const dispatch = useDispatch();
  // const handleDelete = () => dispatch(deleteContact(id));
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  return (
    <Item key={id}>
      <MdPerson size={15} />
      <Name>{name}</Name>
      <Number>{number}</Number>
      <DeleteIconBtn
        aria-label="Delete contact"
        onClick={() => deleteContact(id).unwrap()}
        disabled={isDeleting}
      >
        <MdClose size={10} />
      </DeleteIconBtn>
    </Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};
