import { useSelector } from 'react-redux';
import { useGetContactsQuery } from 'redux/phonebook/operations';
import { selectFilter } from 'redux/phonebook/selectors';
import { ContactItem } from 'components/Contact/Contact';
import { List, Notify } from './ContactsList.styled';

export const ContactList = () => {
  const { data: contacts = [], isLoading, error } = useGetContactsQuery();
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

      {isLoading && !error && <Notify>Loading contacts...</Notify>}
      {error && <Notify>{error}</Notify>}

      {visibleContacts.length === 0 && !error && !isLoading && (
        <Notify>No contacts</Notify>
      )}
    </List>
  );
};
