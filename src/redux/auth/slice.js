import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';

const handleCreateUser = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};

const handleResetUser = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
};

const handleRefreshUser = (state, action) => {
  state.user = action.payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

const actions = [register, logIn, logOut, refreshUser];

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(register.fulfilled, handleCreateUser)
      .addCase(logIn.fulfilled, handleCreateUser)
      .addCase(logOut.fulfilled, handleResetUser)

      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, handleRefreshUser)
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      })
      // Rejected from all cases
      .addMatcher(
        isAnyOf(...actions.map(action => action.rejected)),
        (state, action) => {
          state.error = action.payload;
        }
      ),
});

export const authReducer = authSlice.reducer;
