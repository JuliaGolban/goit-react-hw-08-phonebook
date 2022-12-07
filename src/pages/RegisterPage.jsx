import { Container, Section, Title } from 'components/base/CommonStyle.styled';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';

const RegisterPage = () => {
  return (
    <Section>
      <Container>
        <Title>Sign up with Email</Title>
        <RegisterForm />
      </Container>
    </Section>
  );
};

export default RegisterPage;
