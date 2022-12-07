import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from 'redux/phonebook/selectors';
import { addContact } from 'redux/phonebook/operations';
import {
  Field,
  Form,
  Input,
  Label,
  Submit,
} from 'components/ContactsForm/ContactsForm.styled';

export const RegisterForm = () => {
  const users = useSelector(selectContacts);

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;

    const name = form.elements.name;
    const email = form.elements.email;
    const password = form.elements.email;

    const newUser = {
      name: name.value,
      email: email.value,
      password: password.value,
    };

    dispatch(addContact(newUser));
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Field>
        <Label>Username</Label>
        <Input
          type="text"
          name="name"
          placeholder="Enter your name..."
          pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Field>
      <Field>
        <Label>Email</Label>
        <Input
          type="email"
          name="email"
          placeholder="Enter your email..."
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Email must consist of numbers or letters and @. Example, user@mail.com"
          required
        />
      </Field>
      <Field>
        <Label>Password</Label>
        <Input
          type="password"
          name="password"
          placeholder="Enter your password..."
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Password must consist of numbers and letters and can't contain spaces and start with +"
          required
        />
      </Field>
      <Submit type="submit">Sing up</Submit>
    </Form>
  );
};
