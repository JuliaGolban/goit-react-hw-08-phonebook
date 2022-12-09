import { RiContactsBookFill } from 'react-icons/ri';
import { Container, Section, Title } from 'components/base/CommonStyle.styled';

const Home = () => {
  return (
    <Container>
      <Section margin="calc(15%) 0 0 0">
        <Title size="30px" margin="0 0 20px 0" position="center">
          Welcome to the <br />
          <RiContactsBookFill size={20} fill="rgb(9 9 121)" />
          <b> Phonebook</b> - <br />
          Contacts manager
        </Title>
      </Section>
    </Container>
  );
};

export default Home;
