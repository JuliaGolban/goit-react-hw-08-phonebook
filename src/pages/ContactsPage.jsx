import { ContactForm } from '../components/ContactsForm/ContactsForm';
import { ContactList } from '../components/ContactsList/ContactsList';
import { Filter } from '../components/ContactsFilter/ContactsFilter';
import {
  Container,
  Section,
  Title,
} from '../components/base/CommonStyle.styled';

const ContactsPage = () => {
  return (
    <main>
      <Section>
        <Container>
          <Title as="h1">Phonebook</Title>
          <ContactForm />
        </Container>
      </Section>
      <Section>
        <Container>
          <Title as="h2">Contacts</Title>
          <Filter />
          <ContactList />
        </Container>
      </Section>
    </main>
  );
};

export default ContactsPage;
