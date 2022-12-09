import styled from 'styled-components';

const Container = styled.div`
  display: ${props => props.display || 'flex'};
  flex-direction: ${props => props.flexDirection || 'column'};
  align-items: ${props => props.alignItems || 'center'};
  justify-content: c ${props => props.justifyContent || 'center'};
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;

  @media screen and (min-width: 768px) {
    padding: 0 40px;
    justify-content: space-evenly;
    flex-direction: row;
    align-items: flex-start;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1200px;
  }
`;

const Section = styled.section`
  margin: ${props => props.margin || '40px 0 0 0'};
`;

const Title = styled.h1`
  margin: ${props => props.margin || '0 0 20px 0'};
  text-align: ${props => props.position || 'start-left'};
  font-size: ${props => props.size || '18px'};
  font-weight: 700;
  line-height: 1.33;
  color: rgb(9 9 121);
`;

export { Container, Section, Title };
