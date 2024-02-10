import axios from 'axios';
import {
	createOrderFail,
	fetchOrderFail,
	fetchOrderStart,
	fetchOrderSuccess,
} from '../redux/orders/orderSlice';

export const getOrders = async (dispatch, currentUser) => {
	dispatch(fetchOrderStart());

	try {
		const orders = await axios.get(`${process.env.REACT_APP_BASE_URL}orders`, {
			headers: {
				'x-token': currentUser.token,
			},
		});
		if (orders) {
			dispatch(fetchOrderSuccess(orders.data.data));
		}
	} catch (error) {
		console.log(error);
		dispatch(fetchOrderFail('Upss, algo salío mal.'));
	}
};

export const createOrder = async (order, dispatch, currentUser) => {
	try {
		const response = await axios.post(
			`${process.env.REACT_APP_BASE_URL}orders`,
			order,
			{
				headers: {
					'x-token': currentUser.token,
				},
			},
		);
		if (response) {
			getOrders(dispatch, currentUser);
		}
	} catch (error) {
		dispatch(createOrderFail());
	}
};
