import { useAuth } from 'hooks/useAuth';
import { Box, Text, Link } from './AuthMenu.styled';

export const AuthMenu = () => {
  const { isLoggedIn } = useAuth();

  return (
    !isLoggedIn && (
      <Box>
        <Text>
          Please <Link to="/login">log in</Link> to your account to view your
          contacts.
        </Text>
        <Text>
          If you are not registered yet, please{' '}
          <Link to="/register">register</Link>
        </Text>
      </Box>
    )
  );
};
