import styled from 'styled-components';
import { IconButton } from 'components/base styles/Buttons';

const Item = styled.li`
  display: flex;
  gap: 10px;
  align-items: flex-end;
  align-content: center;

  color: rgb(42 42 42);

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  &:hover,
  &:focus {
    scale: 1.1;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid rgba(128, 128, 128, 0.7);
    box-shadow: 3px 5px 10px -2px rgba(75, 92, 165, 0.5);
  }
`;

const Name = styled.span`
  margin-right: auto;
  font-size: 14px;
  font-weight: 500;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

const Number = styled.span`
  font-size: 12px;
  font-weight: 400;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;

const IconBtn = styled(IconButton)``;

export { Item, Name, Number, IconBtn };
