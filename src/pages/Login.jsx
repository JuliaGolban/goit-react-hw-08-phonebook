import { Container, Section, Title } from 'components/base/CommonStyle.styled';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { SEO } from 'utils/SEO';

const Login = () => {
  return (
    <main>
      <SEO title="Login" description="You can login to your account" />
      <Container>
        <Section>
          <Title>Log in to your account</Title>
          <LoginForm />
        </Section>
      </Container>
    </main>
  );
};

export default Login;
