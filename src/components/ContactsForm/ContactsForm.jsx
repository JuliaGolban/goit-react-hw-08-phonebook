import toast from 'react-hot-toast';
import {
  useGetContactsQuery,
  useAddContactMutation,
} from 'redux/phonebook/operations';
import { Form, Field, Label, Input, Submit } from '../base styles/Form.styled';

export const ContactForm = () => {
  const { data: contacts = [] } = useGetContactsQuery();
  const [addContact, { isLoading }] = useAddContactMutation();

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const form = e.target;

      const name = form.elements.name;
      const number = form.elements.number;

      const newContact = {
        name: name.value,
        number: number.value,
      };

      // check the new contact for an existing duplicate
      const normalizedName = name.value.toLowerCase();
      const isExist = contacts.some(
        ({ name }) => name.toLowerCase() === normalizedName
      );
      if (isExist) {
        return toast(t => (
          <span>
            <b>{name.value}</b> is already in contacts &nbsp;
            <button
              onClick={() => {
                form.reset();
                toast.dismiss(t.id);
              }}
            >
              Reset
            </button>
          </span>
        ));
      }

      // add the new contact to phonebook and reset form
      await addContact(newContact).unwrap();
      form.reset();
    } catch (error) {
      toast.error('Error adding the contact');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Field aria-label="Name">
        <Label>Name</Label>
        <Input
          type="text"
          name="name"
          placeholder="Enter name..."
          pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Field>
      <Field aria-label="Number">
        <Label>Number</Label>
        <Input
          type="tel"
          name="number"
          placeholder="Enter phone number..."
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Field>
      <Submit type="submit" disabled={isLoading}>
        Add contact
      </Submit>
    </Form>
  );
};
