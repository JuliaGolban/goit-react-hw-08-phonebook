import toast from 'react-hot-toast';
// import { useDispatch } from 'react-redux';
// import { useContacts } from 'hooks/useContacts';
// import { addContact } from 'redux/phonebook/operations';
import {
  useGetContactsQuery,
  useAddContactMutation,
} from 'redux/phonebook/operations';
import {
  ContactsForm,
  ContactsField,
  ContactsLabel,
  ContactsInput,
  ContactsSubmit,
} from './ContactsForm.styled';

export const ContactForm = () => {
  // const { contacts } = useContacts();
  // const dispatch = useDispatch();
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

      // dispatch(addContact(newContact));
      await addContact(newContact).unwrap();

      form.reset();
    } catch (error) {
      toast.error(`${error.message}`);
      console.log(error);
    }
  };

  return (
    <ContactsForm onSubmit={handleSubmit}>
      <ContactsField>
        <ContactsLabel>Name</ContactsLabel>
        <ContactsInput
          type="text"
          name="name"
          placeholder="Enter name..."
          pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </ContactsField>
      <ContactsField>
        <ContactsLabel>Number</ContactsLabel>
        <ContactsInput
          type="tel"
          name="number"
          placeholder="Enter phone number..."
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </ContactsField>
      <ContactsSubmit type="submit" disabled={isLoading}>
        Add contact
      </ContactsSubmit>
    </ContactsForm>
  );
};
