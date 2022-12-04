import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterContacts(state, action) {
      return (state = action.payload.toLowerCase());
    },
  },
});

export const { filterContacts } = filterSlice.actions;
export const filtersReducer = filterSlice.reducer;
