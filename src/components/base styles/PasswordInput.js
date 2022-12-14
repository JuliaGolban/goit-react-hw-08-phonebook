import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { BiShow, BiHide } from 'react-icons/bi';
import { Input } from './Form.styled';
import { IconButton } from './Buttons';

const InputGroup = styled.span`
  position: relative;
  display: block;

  & svg {
    position: absolute;
    top: 50%;
    right: 8px;
    transform: translateY(-50%);
    fill: rgba(128, 128, 128, 0.7);

    &:hover {
      fill: rgba(128, 128, 128, 1);
    }
  }
`;

export const PasswordInput = ({ value, onChange }) => {
  const [show, setShow] = useState(true);

  const handleClick = e => {
    e.preventDefault();
    setShow(!show);
  };

  return (
    <InputGroup>
      <Input
        type={!show ? 'text' : 'password'}
        name="password"
        value={value}
        onChange={onChange}
        placeholder="Enter your password..."
        title="Password must consist of numbers and letters"
        required
      />
      <IconButton onClick={handleClick}>
        {show ? <BiHide size={20} /> : <BiShow size={20} />}
      </IconButton>
    </InputGroup>
  );
};

PasswordInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
