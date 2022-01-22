import {
	reqPending,
	reqSuccess,
	reqFail,
	updatePassSuccess
} from "./passwordSlice";


 import { reqPassword, updateUserPassword } from "../../api/passwordApi";

export const reqPasswordReset = email => async dispatch => {
	try {
		dispatch(reqPending());
		const response = await reqPassword(email);
		console.log(response);
		if (response.error === false) {
			dispatch(reqSuccess(response));
			return
		}

		dispatch(reqFail(response));
	} catch (err) {
		dispatch(reqFail({error: true, message: err.message}));
	}
};

export const updatePassword = formData => async dispatch => {
	try {
		dispatch(reqPending());

		const response = await updateUserPassword(formData);

		if (response.error === false) {
			dispatch(updatePassSuccess(response));
			return;
		}

		dispatch(reqFail(response));
	} catch (err) {
		dispatch(reqFail({error: true, message: err.message}));
	}
};