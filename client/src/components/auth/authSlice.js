import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isLoading: false,
	error: false,
	message: "",
  isAuthenticated: false,
	// showUpdatePassForm: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart: (state, { payload }) => {
      state.isLoading = true;
    },
    loginSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.error = payload.error;
      state.message = payload.message;
    },
    loginFailure: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload.error;
      state.message = payload.message;
    },
    logoutSuccess: (state, { payload }) => {
      state.isAuthenticated = false;
      state.error = payload.error;
      state.message = payload.message;
    },
    setAuth: (state, { payload }) => {
      state.isAuthenticated = true;
    },
  },
});

const { reducer, actions } = authSlice;

export const { loginStart, loginSuccess, loginFailure, logoutSuccess, setAuth } = actions;

export default reducer;
