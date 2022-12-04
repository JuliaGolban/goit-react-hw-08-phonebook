import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

// const handlePending = state => {
//   state.isLoading = true;
// };
// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

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

const actions = [fetchContacts, addContact, deleteContact];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, handleFetchContacts)
      .addCase(addContact.fulfilled, handleAddContacts)
      .addCase(deleteContact.fulfilled, handleDeleteContacts)
      .addMatcher(
        isAnyOf(...actions.map(action => action.fulfilled)),
        state => {
          state.isLoading = false;
          state.error = null;
        }
      )
      .addMatcher(isAnyOf(...actions.map(action => action.pending)), state => {
        state.isLoading = true;
      })
      .addMatcher(
        isAnyOf(...actions.map(action => action.rejected)),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      ),

  // extraReducers: {
  //   // === action handling code for fetching a task ===
  //   [fetchContacts.pending]: handlePending,
  //   [fetchContacts.fulfilled](state, action) {
  //     state.isLoading = false;
  //     state.error = null;
  //     state.items = action.payload;
  //   },
  //   [fetchContacts.rejected]: handleRejected,

  //   //  === action handling code for adding a task ===
  //   [addContact.pending]: handlePending,
  //   [addContact.fulfilled](state, action) {
  //     state.isLoading = false;
  //     state.error = null;
  //     state.items.push(action.payload);
  //   },
  //   [addContact.rejected]: handleRejected,

  //   //  === action handling code for deleting a task ===
  //   [deleteContact.pending]: handlePending,
  //   [deleteContact.fulfilled](state, action) {
  //     state.isLoading = false;
  //     state.error = null;
  //     const index = state.items.findIndex(({ id }) => id === action.payload.id);
  //     state.items.splice(index, 1);
  //   },
  //   [deleteContact.rejected]: handleRejected,
  // },
});

export const contactsReducer = contactsSlice.reducer;
