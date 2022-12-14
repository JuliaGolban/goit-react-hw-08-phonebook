import { useSelector } from 'react-redux';
import { useGetContactsQuery } from 'redux/phonebook/operations';
import { selectFilter } from 'redux/phonebook/selectors';
import { ContactItem } from 'components/Contact/Contact';
import { List, Notify } from './ContactsList.styled';

export const ContactList = () => {
  const {
    data: contacts = [],
    isFetching: isLoading,
    isError,
  } = useGetContactsQuery();
  const filter = useSelector(selectFilter);
  const getVisibleContacts = () => {
    return contacts.filter(({ name }) => name.toLowerCase().includes(filter));
  };
  const visibleContacts = getVisibleContacts();

  return (
    <List>
      {visibleContacts.length > 0 &&
        visibleContacts.map(({ id, name, number }) => (
          <ContactItem key={id} id={id} name={name} number={number} />
        ))}

      {isLoading && !isError && <Notify>Loading...</Notify>}
      {isError && <Notify>{isError}</Notify>}

      {visibleContacts.length === 0 && !isError && !isLoading && (
        <Notify>No contacts</Notify>
      )}
    </List>
  );
};
