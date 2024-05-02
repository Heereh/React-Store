import React, { useEffect } from 'react';
import { ContainerResumen, ResumenCardContainer } from './ResumenStyled';
import { getOrders } from '../../axios/axios-orders';
import { ResumenCard } from '../../components/UI/ResumenCard/ResumenCard';
import { useDispatch, useSelector } from 'react-redux';

import Loader from '../../components/UI/Loading/Loading';
import { clearError, fetchOrderFail } from '../../redux/orders/orderSlice';

const Resumen = () => {
	const dispatch = useDispatch();
	const currentUser = useSelector((state) => state.user.currentUser);
	const { orders, error, loading } = useSelector((state) => state.orders);

	useEffect(() => {
		if (!orders) {
			getOrders(dispatch, currentUser);
		}
		if (!currentUser.token) {
			dispatch(fetchOrderFail());
		} else {
			error && dispatch(clearError());
		}
	}, [currentUser, dispatch, error, orders]);

	if (loading && !orders) {
		return <Loader />;
	}

	if (error) {
		return <h2 style={{ textAlign: 'center' }}>{error}</h2>;
	}

	return (
		<ContainerResumen>
			<h2>Resumen de mis compras</h2>

			<ResumenCardContainer>
				{orders?.length ? (
					orders.map((order) => {
						return (
							<ResumenCard
								key={order._id}
								{...order}
							/>
						);
					})
				) : (
					<h2 style={{ textAlign: 'center' }}>
						Aun no has hecho tu compra, que esperas!
					</h2>
				)}
			</ResumenCardContainer>
		</ContainerResumen>
	);
};

export default Resumen;
