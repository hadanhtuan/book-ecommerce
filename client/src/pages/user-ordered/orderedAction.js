import {
	orderedPending,
	orderedSuccess,
	orderedFail,
} from "./orderedSlice";

import { orderedBooksApi } from "../../api/orderedApi.js";

export const getUserOrdered = () => async dispatch => {
	dispatch(orderedPending());
	try {
		const response = await orderedBooksApi();
		if (response.error === false) {
			console.log(response)
		}
		dispatch(orderedSuccess(response))		
	} catch (err) {
		dispatch(orderedFail({error: true, message: err.message}));
	}
};