import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  justify-content: center;
  margin: 30px auto;
`;
const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 30px;
  /* background-color: rgb(255 255 255 / 50%); */
  /* border-radius: 5px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.75); */
`;

const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 32px;
  font-weight: 700;
  color: rgb(0, 0, 0);
`;

export { Container, Section, Title };
