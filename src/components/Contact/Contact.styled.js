import { IconButton } from 'components/base styles/Buttons';
import styled from 'styled-components';

const Item = styled.li`
  display: flex;
  gap: 10px;
  align-items: flex-end;
  align-content: center;

  color: rgb(42 42 42);

  &:not(:last-child) {
    margin-bottom: 10px;
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
