import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Header = styled.header`
  display: inline-flex;
  width: 100vw;
  min-height: 50px;
  padding: 10px 0;

  border-bottom: 5px;
  box-shadow: 0px 7px 10px -2px rgba(132, 132, 132, 0.5);

  & > div {
    display: inline-flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
    width: 100vw;

    @media screen and (min-width: 768px) {
      max-width: 1200px;
    }
  }
`;

const PageNav = styled.nav`
  display: flex;
  gap: 10px;

  @media screen and (min-width: 320px) {
    gap: 15px;
  }

  @media screen and (min-width: 768px) {
    gap: 20px;
  }
`;

const AuthNav = styled.nav`
  display: flex;
  gap: 10px;

  @media screen and (min-width: 320px) {
    gap: 15px;
  }

  @media screen and (min-width: 768px) {
    gap: 20px;
  }
`;

const StyledNavLink = styled(NavLink)`
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;

  color: rgb(255 255 255);
  border-radius: 4px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }

  &.active {
    color: rgb(9 9 121);
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: rgb(9 9 121);
  }
`;

export { Header, StyledNavLink, PageNav, AuthNav };
