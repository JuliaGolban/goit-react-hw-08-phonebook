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
  color: #2a2a2a;
`;

const Input = styled.input`
  width: 300px;
  padding: 10px 15px;

  font-size: 12px;
  font-weight: 500;
  color: #2a2a2a;

  background-color: rgb(255 255 255 / 70%);
  border-radius: 5px;
  border: 2px solid rgba(128, 128, 128, 0.7);
  box-shadow: 3px 5px 10px -2px rgba(75, 92, 165, 0.5);

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

  width: 100px;
  height: 30px;

  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  color: #2a2a2a;

  background-color: rgba(160, 141, 196, 0.5);
  border-radius: 5px;
  border: 1px solid rgba(128, 128, 128, 0.7);
  box-shadow: 5px 5px 5px -2px rgba(75, 92, 165, 0.3);
  cursor: pointer;

  &:hover,
  &:focus,
  &:active {
    border: 1px solid rgba(128, 128, 128);
    box-shadow: 1px -1px 10px -2px rgba(75, 92, 165, 0.3) inset;
  }
`;

export { Form, Field, Label, Input, Submit };
