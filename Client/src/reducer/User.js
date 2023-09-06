import { createReducer } from "@reduxjs/toolkit";
const initialState = {
  isAuthenticated: false,
};
export const userReducer = createReducer(initialState, {
  loginRequest: (state) => {
    state.loading = true;
  },
  loginSuccess: (state, action) => {
    state.loading = false;
    state.user = action.payload;
    state.message = action.message;
    state.isAuthenticated = true;
  },
  loginFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.isAuthenticated = false;
  },
  registerRequest: (state) => {
    state.loading = true;
  },
  registerSuccess: (state, action) => {
    state.loading = false;
    state.user = action.payload;
    state.isAuthenticated = true;
    state.message = action.message;
  },
  registerFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.isAuthenticated = false;
  },

  loadUserRequest: (state) => {
    state.loading = true;
  },
  loadUserSuccess: (state, action) => {
    state.loading = false;
    state.user = action.payload;
    state.isAuthenticated = true;
  },
  loadUserFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.isAuthenticated = false;
  },
  clearErrors: (state) => {
    state.error = null;
  },
  logoutRequest: (state) => {
    state.loading = true;
  },
  logoutSuccess: (state) => {
    state.loading = false;
    state.user = null;
    state.isAuthenticated = false;
  },
  logoutFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.isAuthenticated = true;
  },
  clearMessage: (state) => {
    state.message = null;
  },
});
