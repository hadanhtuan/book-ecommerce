import {
	orderPending,
	orderSuccess,
	orderFail,
} from "./orderSlice";

import { orderBooksApi } from "../../api/orderApi";

export const orderBooks = (booksOrderList, totalPrice) => async dispatch => {
	try {
		dispatch(orderPending());

		const response = await orderBooksApi(booksOrderList, totalPrice);

		if (response.error === false) {
			dispatch(orderSuccess(response));
		}

		dispatch(orderFail(response));
	} catch (err) {
		dispatch(orderFail({error: true, message: err.message}));
	}
};