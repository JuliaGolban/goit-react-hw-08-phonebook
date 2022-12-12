import styled from 'styled-components';

const TextButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  min-width: 100px;
  min-height: 30px;
  margin: ${props => props.margin || '0'};
  padding: 8px 10px;

  font-size: ${props => props.size || '10px'};
  font-weight: 700;
  text-transform: uppercase;
  color: rgb(42 42 42);

  background-color: ${props => props.bgc || 'rgba(160, 141, 196, 0.5)'};
  border-radius: 5px;
  border: none;
  box-shadow: 5px 5px 5px -2px rgba(75, 92, 165, 0.3);
  cursor: pointer;

  &:hover,
  &:focus,
  &:active {
    color: rgb(255 255 255);
    background-color: rgba(9, 9, 121, 0.7);
    border: none;
    box-shadow: 1px -1px 10px -2px rgba(75, 92, 165, 0.3) inset;
  }
`;

const IconButton = styled.button`
  display: inline-flex;
  align-content: center;
  justify-content: center;
  align-items: center;

  margin: ${props => props.margin || '0'};
  padding: 0;

  color: ${props => props.color || 'rgb(42 42 42)'};
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus,
  &:active {
    color: rgb(255 0 0);
  }

  & > svg {
    fill: currentColor;
  }
`;

export { TextButton, IconButton };
