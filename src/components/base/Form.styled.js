import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  background-color: transparent;
`;

const Field = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
`;

const Label = styled.span`
  margin-bottom: 4px;

  font-size: 12px;
  font-weight: 500;
  line-height: 1.17;
  letter-spacing: 0.01em;
  color: rgb(42 42 42);
`;

const Input = styled.input`
  width: calc(100vw - 40px);
  padding: 10px 15px;

  font-size: 12px;
  font-weight: 500;
  color: rgb(42 42 42);

  background-color: rgb(255 255 255 / 70%);
  border-radius: 5px;
  border: 2px solid rgba(128, 128, 128, 0.7);
  box-shadow: 3px 5px 10px -2px rgba(75, 92, 165, 0.5);

  @media screen and (min-width: 320px) {
    max-width: 300px;
  }

  &:hover,
  &:focus,
  &:active {
    outline: 0;
    border: 2px solid rgb(128, 128, 128);
    box-shadow: 1px -1px 10px -2px rgba(75, 92, 165, 0.5) inset;
  }
`;

const Submit = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 8px 10px;

  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  color: rgb(42 42 42);

  background-color: rgba(9, 9, 121, 0.3);
  border-radius: 5px;
  border: none;
  /* border: 1px solid rgba(128, 128, 128, 0.7); */
  box-shadow: 5px 5px 5px -2px rgba(75, 92, 165, 0.3);
  cursor: pointer;

  &:hover,
  &:focus,
  &:active {
    background-color: rgba(160, 141, 196, 0.5);
    border: none;
    /* border: 1px solid rgba(128, 128, 128); */
    box-shadow: 1px -1px 10px -2px rgba(75, 92, 165, 0.3) inset;
  }
`;

export { Form, Field, Label, Input, Submit };
