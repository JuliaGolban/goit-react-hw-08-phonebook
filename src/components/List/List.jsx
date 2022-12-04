import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsLoading,
  selectError,
  selectVisibleContacts,
} from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import { ContactItem } from 'components/Item/Item';
import { List, Notify } from './List.styled';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <List>
      {contacts.length > 0 &&
        contacts.map(({ id, name, number }) => (
          <ContactItem key={id} id={id} name={name} number={number} />
        ))}

      {isLoading && !error && <Notify>Loading contacts...</Notify>}
      {error && <Notify>{error}</Notify>}

      {contacts.length === 0 && !error && !isLoading && (
        <Notify>No contacts</Notify>
      )}
    </List>
  );
};
