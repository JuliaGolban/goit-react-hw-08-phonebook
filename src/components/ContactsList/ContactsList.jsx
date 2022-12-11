// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { useContacts } from 'hooks/useContacts';
// import { fetchContacts } from 'redux/phonebook/operations';
import { useGetContactsQuery } from 'redux/phonebook/operations';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { List, Notify } from './ContactsList.styled';

export const ContactList = () => {
  // const { contacts, isLoading, error } = useContacts();
  const { data: contacts = [], isLoading, error } = useGetContactsQuery();
  console.log('ContactList ~ useFetchContactsQuery', useGetContactsQuery());
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

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
