import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isLoading: false,
	error: false,
	message: "",
	showUpdatePassForm: false,
};

const orderSlice = createSlice({
	name: "orderSlice",
	initialState,
	reducers: {
		orderPending: state => {
			state.isLoading = true;
		},
		orderSuccess: (state, { payload }) => {
			state.isLoading = false;
			state.error = payload.error;
			state.message = payload.message;
			state.showUpdatePassForm = true;
		},
		
		orderFail: (state, { payload }) => {
			state.isLoading = false;
			state.error = payload.error;
			state.message = payload.message;
		},
	},
});

const { reducer, actions } = orderSlice;

export const {
	orderPending,
	orderSuccess,
	orderFail,
} = actions;

export default reducer;