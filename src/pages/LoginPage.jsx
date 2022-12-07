import { Container, Section, Title } from 'components/base/CommonStyle.styled';
import { LoginForm } from 'components/LoginForm/LoginForm';

const LoginPage = () => {
  return (
    <Section>
      <Container>
        <Title>Log in to your account</Title>
        <LoginForm />
      </Container>
    </Section>
  );
};

export default LoginPage;
