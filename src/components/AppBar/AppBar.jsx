import { Container } from 'components/base/CommonStyle.styled';
// import { UserMenu } from 'components/UserMenu/UserMenu';
import { Header, PageNav, AuthNav, StyledNavLink } from './AppBar.styled';

export const AppBar = () => {
  return (
    <Header id="header">
      <Container>
        <PageNav>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/contacts">Contacts</StyledNavLink>
        </PageNav>
        <AuthNav>
          <StyledNavLink to="/register">Register</StyledNavLink>
          <StyledNavLink to="/login">Login</StyledNavLink>
        </AuthNav>

        {/* <UserMenu /> */}
      </Container>
    </Header>
  );
};
