import { useDispatch } from 'react-redux';
// import { BiShow, BiHide } from 'react-icons/bi';
import { register } from 'redux/auth/operations';
import { Form, Field, Label, Input, Submit } from '../base styles/Form.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;

    const name = form.elements.name;
    const email = form.elements.email;
    const password = form.elements.password;

    const newUser = {
      name: name.value,
      email: email.value,
      password: password.value,
    };

    dispatch(register(newUser));
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
          title="Email must consist of your personal info,@ symbol and domain. Example, personal_info@domain"
          required
        />
      </Field>
      <Field>
        <Label>Password</Label>
        <Input
          type="password"
          name="password"
          placeholder="Enter your password..."
          title="Password must consist of numbers and letters"
          required
        />
      </Field>
      <Submit type="submit">Sing up</Submit>
    </Form>
  );
};
