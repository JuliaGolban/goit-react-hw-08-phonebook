import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { logOut } from 'redux/auth/operations';
import { fetchContacts, addContact, deleteContact } from './operations';

const handleFetchContacts = (state, action) => {
  state.items = action.payload;
};

const handleAddContacts = (state, action) => {
  state.items.push(action.payload);
};

const handleDeleteContacts = (state, action) => {
  const idx = state.items.findIndex(({ id }) => id === action.payload.id);
  state.items.splice(idx, 1);
};

const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleResetContacts = state => {
  state.items = [];
  state.error = null;
  state.isLoading = false;
};

const actions = [fetchContacts, addContact, deleteContact];

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, handleFetchContacts)
      .addCase(addContact.fulfilled, handleAddContacts)
      .addCase(deleteContact.fulfilled, handleDeleteContacts)
      .addCase(logOut.fulfilled, handleResetContacts)
      .addMatcher(
        isAnyOf(...actions.map(action => action.fulfilled)),
        handleFulfilled
      )
      .addMatcher(
        isAnyOf(...actions.map(action => action.pending)),
        handlePending
      )
      .addMatcher(
        isAnyOf(...actions.map(action => action.rejected)),
        handleRejected
      ),
});

export const contactsReducer = contactsSlice.reducer;
