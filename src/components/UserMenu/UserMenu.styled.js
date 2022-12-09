import styled from 'styled-components';

const Box = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  @media screen and (min-width: 320px) {
    gap: 10px;
  }

  @media screen and (min-width: 768px) {
    gap: 15px;
  }
`;

const Text = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: rgb(9 9 121);

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

const LogOutBtn = styled.button`
  font-size: 14px;
  font-weight: 500;

  color: rgb(255 255 255);
  background-color: transparent;
  border: none;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }

  :hover,
  :focus {
    color: rgb(9 9 121);
  }
`;

export { Box, Text, LogOutBtn };
