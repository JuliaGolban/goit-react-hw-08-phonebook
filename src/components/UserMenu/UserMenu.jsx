import { Box, Text, LogOutBtn } from './UserMenu.styled';

export const UserMenu = ({ name }) => {
  return (
    <Box>
      <Text>Welcome, {name}</Text>
      <LogOutBtn>Logout</LogOutBtn>
    </Box>
  );
};
