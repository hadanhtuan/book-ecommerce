import axios from "axios";
const baseUrl ="http://localhost:3000/api";


export const reqPassword = email => {
	return new Promise(async (resolve, reject) => {
		try {
			const {data} = axios.post(`${baseUrl}/auth/forgot-password`, email);
			
			resolve(data);
		} catch (error) {
			reject(error);
		}
	});
};

export const updateUserPassword = formData => {
	return new Promise(async (resolve, reject) => {
		try {
			const { data }  = axios.post(`${baseUrl}/auth/reset-password/${formData.resetToken}`, formData.password);


			console.log(data);
			resolve(data);
		} catch (error) {
			reject(error);
		}
	});
};
