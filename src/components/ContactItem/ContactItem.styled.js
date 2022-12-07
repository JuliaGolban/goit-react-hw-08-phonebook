import styled from 'styled-components';

const Item = styled.li`
  display: flex;
  gap: 10px;
  align-items: center;
  align-content: center;

  color: rgb(42 42 42);

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

const Name = styled.span`
  margin-right: auto;
  font-size: 16px;
  font-weight: 500;
`;

const Number = styled.span`
  font-size: 14px;
  font-weight: 400;
`;

const DeleteIconBtn = styled.button`
  display: inline-flex;
  align-content: center;
  justify-content: center;
  align-items: center;

  padding: 0;

  color: rgb(42 42 42);
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus,
  &:active {
    color: red;
  }

  & > svg {
    fill: currentColor;
  }
`;

export { Item, Name, Number, DeleteIconBtn };
