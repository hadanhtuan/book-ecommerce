import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isLoading: false,
	error: false,
	message: "",
	showUpdatePassForm: false,
};
const passwordReset = createSlice({
	name: "passwordReset",
	initialState,
	reducers: {
		reqPending: state => {
			state.isLoading = true;
		},
		reqSuccess: (state, { payload }) => {
			state.isLoading = false;
			state.error = payload.error;
			state.message = payload.message;
			state.showUpdatePassForm = true;
		},
		updatePassSuccess: (state, { payload }) => {
			state.isLoading = false;
			state.error = payload.error;
			state.message = payload.message;
		},
		reqFail: (state, { payload }) => {
			state.isLoading = false;
			state.error = payload.error;
			state.message = payload.message;
		},
	},
});

const { reducer, actions } = passwordReset;

export const {
	reqPending,
	reqSuccess,
	reqFail,
	updatePassSuccess,
} = actions;

export default reducer;