import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { MdSave } from 'react-icons/md';
import PropTypes from 'prop-types';
import { useUpdateContactMutation } from 'redux/phonebook/operations';
import { IconButton } from 'components/base styles/Buttons';
import { Form, Field, Label, Input } from '../base styles/Form.styled';

export const ContactEditorForm = ({ contact, onEdit }) => {
  const { id, name, number } = contact;
  const [editName, setEditName] = useState(name);
  const [editNumber, setEditNumber] = useState(number);
  const [updateContact, { isLoading: isUpdating }] = useUpdateContactMutation();

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setEditName(value);
        break;

      case 'number':
        setEditNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const form = e.target;
      const name = form.elements.name;
      const number = form.elements.number;

      const editedContact = {
        id: id,
        name: name.value,
        number: number.value,
      };

      await updateContact(editedContact).unwrap();
      onEdit();
      reset();
    } catch (error) {
      toast.error('Error editing the contact');
    }
  };

  const reset = () => {
    setEditName('');
    setEditNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Field>
        <Label>Name</Label>
        <Input
          type="text"
          name="name"
          placeholder={name}
          value={editName}
          onChange={handleChange}
          pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Field>
      <Field>
        <Label>Number</Label>
        <Input
          type="tel"
          name="number"
          placeholder={number}
          value={editNumber}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Field>
      <IconButton
        margin="0 0 0 auto"
        type="submit"
        disabled={isUpdating}
        aria-label="Edit contact"
      >
        <MdSave size={15} />
      </IconButton>
    </Form>
  );
};

ContactEditorForm.propTypes = {
  contact: PropTypes.exact({
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
  }).isRequired,
  onEdit: PropTypes.func.isRequired,
};
