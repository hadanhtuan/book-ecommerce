import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isLoading: false,
	error: false,
	message: "",
  isAuthenticated: false,
	// showUpdatePassForm: false,
};

const userSlice = createSlice({
  name: "user",
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
  },
});

const { reducer, actions } = userSlice;

export const { loginStart, loginSuccess, loginFailure } = actions;

export default reducer;
