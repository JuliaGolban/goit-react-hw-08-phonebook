import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { MdPerson, MdClose } from 'react-icons/md';
import { deleteContact } from 'redux/operations';
import { Item, Name, Number, DeleteIconBtn } from './Item.styled';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <Item key={id}>
      <MdPerson size={15} />
      <Name>{name}</Name>
      <Number>{number}</Number>
      <DeleteIconBtn aria-label="Delete contact" onClick={handleDelete}>
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
