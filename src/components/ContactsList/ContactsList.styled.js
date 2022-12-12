import styled from 'styled-components';

const List = styled.ul`
  width: calc(100vw - 40px);

  @media screen and (min-width: 320px) {
    max-width: 300px;
  }

  @media screen and (min-width: 768px) {
    max-width: 400px;
  }
`;

const Notify = styled.p`
  margin-bottom: 15px;
  font-weight: 500;
`;
export { List, Notify };
