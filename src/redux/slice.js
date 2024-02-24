import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout } from './operation';

const initialState = {
  username: '',
  email: '',
  token: '',
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.username = action.payload.username;
        state.email = action.payload.email;
        state.isLoggedIn = true;
        state.token = action.payload.token;
      })
      .addCase(register.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.username = action.payload.username;
        state.email = action.payload.email;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.profilePic = action.payload.profilePic;
        state.isLoading = false;
        state.favoriteNoties = action.payload.favoriteNoties;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.username = null;
        state.email = null;
        state.token = null;
        state.isLoggedIn = false;
        state.profilePic = null;
      })
      .addCase(logout.rejected, (state, action) => {
        state.username = null;
        state.email = null;
        state.token = null;
        state.isLoggedIn = false;
        state.profilePic = null;
      });
  },
});

export const authReducer = authSlice.reducer;
