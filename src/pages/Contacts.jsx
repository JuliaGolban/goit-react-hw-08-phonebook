import { ContactForm } from '../components/ContactsForm/ContactsForm';
import { ContactList } from '../components/ContactsList/ContactsList';
import { Filter } from '../components/ContactsFilter/ContactsFilter';
import {
  Container,
  Section,
  Title,
} from '../components/base styles/CommonStyle.styled';
import { SEO } from 'utils/SEO';

const Contacts = () => {
  return (
    <main>
      <SEO title="Contacts" description="You can create your contacts list" />
      <Container>
        <Section>
          <Title as="h1" hidden>
            Phonebook
          </Title>
          <Title as="h2">Create New contact</Title>
          <ContactForm />
        </Section>
        <Section>
          <Title as="h2">Contacts</Title>
          <Filter />
          <ContactList />
        </Section>
      </Container>
    </main>
  );
};

export default Contacts;
