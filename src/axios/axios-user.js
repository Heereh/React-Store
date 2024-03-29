import axios from 'axios';


export const createUser = async (nombre, email, password) => {
	try {
		const response = await axios.post(`${process.env.REACT_APP_BASE_URL}auth/register`, {
			nombre,
			email,
			password,
		});
		console.log(response.data);
		return response.data;
	} catch (error) {
		return alert(error.response.data.errors[0].msg);
	}
};

export const loginUser = async (email, password) => {
	try {
		const response = await axios.post(
			`${process.env.REACT_APP_BASE_URL}auth/login`,
			{
				email,
				password,
			},
		);
		return response.data;
	} catch (error) {
		console.log(error);
		return alert(error.response.data.msg);
	}
};
