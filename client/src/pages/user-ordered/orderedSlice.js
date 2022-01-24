import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isLoading: false,
	error: false,
	message: "",
    ordered: [],
	totalPrice: 0,
};

const orderedSlice = createSlice({
	name: "orderedSlice",
	initialState,
	reducers: {
		orderedPending: state => {
			state.isLoading = true;
		},
		orderedSuccess: (state, { payload }) => {
			state.isLoading = false;
			state.error = payload.error;
			state.message = payload.message;
			state.ordered = payload.ordersList;
			state.totalPrice = payload.totalPrice;
			//Bên backend trả về ???
		},
		orderedFail: (state, { payload }) => {
			state.isLoading = false;
			state.error = payload.error;
			state.message = payload.message;
		},
	},
});

const { reducer, actions } = orderedSlice;

export const {
	orderedPending,
	orderedSuccess,
	orderedFail,
} = actions;

export default reducer;