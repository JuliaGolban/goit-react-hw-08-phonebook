import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;

  @media screen and (min-width: 320px) {
    max-width: 320px;
  }

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 0 40px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1280px;
  }
`;
const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 30px;
`;

const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 700;
  color: rgb(9 9 121);
`;

export { Container, Section, Title };
