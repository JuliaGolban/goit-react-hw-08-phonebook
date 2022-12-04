import { ContactForm } from './Form/Form';
import { ContactList } from './List/List';
import { Filter } from './Filter/Filter';
import { Container, Section, Title } from './base/CommonStyle.styled';
import { GlobalStyle } from 'components/base/GlobalStyle';

export const App = () => {
  return (
    <Container>
      <Section>
        <Title as="h1">Phonebook</Title>
        <ContactForm />
      </Section>
      <Section>
        <Title as="h2">Contacts</Title>
        <Filter />
        <ContactList />
      </Section>
      <GlobalStyle />
    </Container>
  );
};
