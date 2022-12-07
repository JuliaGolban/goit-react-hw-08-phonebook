import { ContactForm } from '../components/ContactsForm/ContactsForm';
import { ContactList } from '../components/ContactsList/ContactsList';
import { Filter } from '../components/ContactsFilter/ContactsFilter';
import {
  Container,
  Section,
  Title,
} from '../components/base/CommonStyle.styled';

const Contacts = () => {
  return (
    <main>
      <Section>
        <Title as="h1" hidden>
          Phonebook
        </Title>
        <Container>
          <Title as="h2">New contact</Title>
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

export default Contacts;
