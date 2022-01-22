import axios from "axios";

export const reqPassword = email => {
	return new Promise(async (resolve, reject) => {
		try {
			const data = {error: false, message:"Sent email"};
			
			resolve(data);
		} catch (error) {
			reject(error);
		}
	});
};

export const updateUserPassword = formData => {
	return new Promise(async (resolve, reject) => {
		try {
			const data  = {error: false, message: 'Update loi oi'};

			console.log(data);
			resolve(data);
		} catch (error) {
			reject(error);
		}
	});
};
