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
		const { error, message } = await reqPassword(email);

		if (error === false) {
			return dispatch(reqSuccess({error, message}));
		}

		dispatch(reqFail({error, message}));
	} catch (err) {
		dispatch(reqFail({error: true, message: err.message}));
	}
};

export const updatePassword = formData => async dispatch => {
	try {
		dispatch(reqPending());

		const response = await updateUserPassword(formData);

		if (response.error === false) {
			return dispatch(updatePassSuccess(response));
		}

		dispatch(reqFail(response));
	} catch (err) {
		dispatch(reqFail({error: true, message: err.message}));
	}
};