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

export const LoginForm = () => {
  const users = useSelector(selectContacts);

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;

    const email = form.elements.email;
    const password = form.elements.password;

    const newContact = {
      email: email.value,
      password: password.value,
    };

    dispatch(addContact(newContact));
    form.reset();
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Field>
        <Label>Email</Label>
        <Input
          type="email"
          name="email"
          placeholder="Enter your email..."
          pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
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
      <Submit type="submit">Log in</Submit>
    </Form>
  );
};
