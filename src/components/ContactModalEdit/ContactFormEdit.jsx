import { toast } from 'react-hot-toast';
import { MdSave } from 'react-icons/md';
import { useUpdateContactMutation } from 'redux/phonebook/operations';
import { IconButton } from 'components/base styles/Buttons';
import { Form, Field, Label, Input } from '../base styles/Form.styled';

export const ContactEditorForm = ({ contact, onEdit }) => {
  const { id, name, number } = contact;
  const [updateContact, { isLoading: isUpdating }] = useUpdateContactMutation();

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const form = e.target;
      const name = form.elements.name;
      const number = form.elements.number;

      const editedContact = {
        name: name.value,
        number: number.value,
      };

      await updateContact(id, editedContact).unwrap();
      onEdit();
      form.reset();
    } catch (error) {
      toast.error('Error editing the contact');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Field>
        <Label>Name</Label>
        <Input
          type="text"
          name="name"
          placeholder={name}
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
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Field>
      <IconButton type="submit" disabled={isUpdating} aria-label="Edit contact">
        <MdSave size={15} />
      </IconButton>
    </Form>
  );
};
