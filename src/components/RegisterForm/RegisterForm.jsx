import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Form, Field, Label, Input, Submit } from '../base styles/Form.styled';
import { PasswordInput } from 'components/base styles/PasswordInput';

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
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Field aria-label="Username">
        <Label>Username</Label>
        <Input
          type="text"
          name="name"
          placeholder="Enter your name..."
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Field>
      <Field aria-label="Email">
        <Label>Email</Label>
        <Input
          type="email"
          name="email"
          placeholder="Enter your email..."
          title="Email must consist of your personal info,@ symbol and domain. Example, personal_info@domain"
          required
        />
      </Field>
      <Field aria-label="Password">
        <Label>Password</Label>
        <PasswordInput />
      </Field>
      <Submit type="submit">Sing up</Submit>
    </Form>
  );
};
