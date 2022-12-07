import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Header = styled.header`
  display: inline-flex;
  width: 100vw;
  padding: 10px 0;

  border-bottom: 5px;
  box-shadow: 0px 7px 10px -2px rgba(132, 132, 132, 0.5);

  & > div {
    display: inline-flex;
    justify-content: space-between;
    max-width: 100vw;
  }
`;

const PageNav = styled.nav`
  display: flex;
  gap: 15px;
`;

const AuthNav = styled.nav`
  display: flex;
  gap: 15px;
`;

const StyledNavLink = styled(NavLink)`
  padding: 8px 10px;

  font-size: 16px;
  font-weight: 500;
  text-decoration: none;

  color: rgb(255 255 255);
  border-radius: 4px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }

  &.active {
    color: rgb(9 9 121);
    /* background-color: rgb(255 255 255 / 30%);
    box-shadow: 5px 5px 5px -2px rgb(132 132 132 / 20%) inset,
      -5px 5px 5px -2px rgb(132 132 132 / 20%) inset,
      -5px -5px 5px -2px rgb(132 132 132 / 20%) inset; */
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: rgb(9 9 121);
    /* background-color: rgb(255 255 255 / 30%);
    box-shadow: 5px 5px 5px -2px rgb(132 132 132 / 20%) inset,
      -5px 5px 5px -2px rgb(132 132 132 / 20%) inset,
      -5px -5px 5px -2px rgb(132 132 132 / 20%) inset; */
  }
`;

export { Header, StyledNavLink, PageNav, AuthNav };
