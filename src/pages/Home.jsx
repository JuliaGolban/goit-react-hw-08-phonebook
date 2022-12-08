import { RiContactsBookFill } from 'react-icons/ri';
import { Container, Section, Title } from 'components/base/CommonStyle.styled';

const Home = () => {
  return (
    <Container>
      <Section margin="calc(30%) 0 0 0">
        <Title size="36px" margin="0 0 20px 0" position="center">
          Welcome to the <br />
          <b> Phonebook</b> - <br />
          Contacts manager
        </Title>
        <RiContactsBookFill size={50} fill="rgb(9 9 121)" />
      </Section>
    </Container>
  );
};

export default Home;
