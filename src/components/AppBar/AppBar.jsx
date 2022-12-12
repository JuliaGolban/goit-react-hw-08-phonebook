import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks/useAuth';
import { Container } from 'components/base styles/CommonStyle.styled';
import { Header, PageNav, AuthNav, StyledNavLink } from './AppBar.styled';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Header id="header">
      <Container>
        <PageNav>
          <StyledNavLink to="/">Home</StyledNavLink>
          {isLoggedIn && <StyledNavLink to="/contacts">Contacts</StyledNavLink>}
        </PageNav>

        {isLoggedIn ? (
          <UserMenu />
        ) : (
          <AuthNav>
            <StyledNavLink to="/register">Register</StyledNavLink>
            <StyledNavLink to="/login">Log in</StyledNavLink>
          </AuthNav>
        )}
      </Container>
    </Header>
  );
};
