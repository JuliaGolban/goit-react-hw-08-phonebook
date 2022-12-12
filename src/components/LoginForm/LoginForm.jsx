import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Form, Field, Label, Input, Submit } from '../base styles/Form.styled';
import { PasswordInput } from 'components/base styles/PasswordInput';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.elements.email;
    const password = form.elements.password;

    const user = {
      email: email.value,
      password: password.value,
    };

    dispatch(logIn(user));
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
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
      <Submit type="submit">Log in</Submit>
    </Form>
  );
};
