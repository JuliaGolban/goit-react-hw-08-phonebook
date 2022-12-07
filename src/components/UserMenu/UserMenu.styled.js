import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Box = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const Text = styled.p`
  font-size: 16px;
  font-weight: 500;
`;

const LogOutBtn = styled.button`
  padding: 3px 5px;
  font-size: 14px;
`;

export { Box, Text, LogOutBtn };
