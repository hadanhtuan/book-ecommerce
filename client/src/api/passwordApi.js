import axios from "axios";

const baseUrl ="http://localhost:3000/api";


export const reqPassword = email => {
	return new Promise(async (resolve, reject) => {
		try {
			const { data } = await axios.post(`${baseUrl}/auth/forgot-password`, {email});
			console.log(data)
			if(data.error === false){
				resolve(data);
			}
		} catch (error) {
			reject(error.response.data);
		}
	});
};

export const updateUserPassword = formData => {
	return new Promise(async (resolve, reject) => {
		try {

			const { data }  = await axios.post(`${baseUrl}/auth/reset-password/${formData.resetToken}`, {password: formData.password});

			console.log(data);
			resolve(data);
		} catch (error) {
			reject(error.response.data);
		}
	});
};
