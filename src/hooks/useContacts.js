import { useSelector } from 'react-redux';
import {
  selectIsLoading,
  selectError,
  selectVisibleContacts,
} from 'redux/contacts/selectors';

export const useContacts = () => {
  const contacts = useSelector(selectVisibleContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return {
    contacts,
    isLoading,
    error,
  };
};
