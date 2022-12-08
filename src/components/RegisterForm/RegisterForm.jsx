import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import {
  FormRegister,
  RegisterField,
  RegisterLabel,
  RegisterInput,
  RegisterSubmit,
} from './RegisterForm.styled';

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
    <FormRegister onSubmit={handleSubmit}>
      <RegisterField>
        <RegisterLabel>Username</RegisterLabel>
        <RegisterInput
          type="text"
          name="name"
          placeholder="Enter your name..."
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </RegisterField>
      <RegisterField>
        <RegisterLabel>Email</RegisterLabel>
        <RegisterInput
          type="email"
          name="email"
          placeholder="Enter your email..."
          title="Email must consist of your personal info,@ symbol and domain. Example, personal_info@domain"
          required
        />
      </RegisterField>
      <RegisterField>
        <RegisterLabel>Password</RegisterLabel>
        <RegisterInput
          type="password"
          name="password"
          placeholder="Enter your password..."
          title="Password must consist of numbers and letters"
          required
        />
      </RegisterField>
      <RegisterSubmit type="submit">Sing up</RegisterSubmit>
    </FormRegister>
  );
};
