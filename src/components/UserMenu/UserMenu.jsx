import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import { Box, Text, LogOutBtn } from './UserMenu.styled';

export const UserMenu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();

  return (
    <Box>
      <Text>Welcome, {user.name}</Text>
      <LogOutBtn type="button" onClick={() => dispatch(logOut())}>
        Log out
      </LogOutBtn>
    </Box>
  );
};
