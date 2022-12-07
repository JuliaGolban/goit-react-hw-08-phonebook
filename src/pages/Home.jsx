import { Container, Section, Title } from 'components/base/CommonStyle.styled';

const Home = () => {
  return (
    <Container>
      <Section margin="calc(30%) 0 0 0">
        <img
          src="https://help.apple.com/assets/61E87F37C2259833FA488417/61E87F38C2259833FA48841E/en_US/97d1bbc73dbf602c4bc123c17bb5def0.png"
          alt="Contacts book icon"
          width={100}
          height={100}
        />
        <Title size="36px" margin="20px 0 0 0" position="center">
          Welcome to the <br />
          <b> Phonebook</b> - <br />
          Contacts manager
        </Title>
      </Section>
    </Container>
  );
};

export default Home;
