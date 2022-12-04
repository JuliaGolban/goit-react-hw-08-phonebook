import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { filterContacts } from 'redux/filterSlice';
import { FieldFilter, LabelFilter, InputFilter } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const handleFilterChange = e => dispatch(filterContacts(e.target.value));

  const filter = useSelector(selectFilter);
  return (
    <FieldFilter>
      <LabelFilter>Find contacts by name</LabelFilter>
      <InputFilter
        type="text"
        name="filter"
        title="Name may contain only letters"
        value={filter}
        onChange={handleFilterChange}
      />
    </FieldFilter>
  );
};
