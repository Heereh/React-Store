import React, { useEffect } from 'react';
import {
	CardWrapperStyled,
	CartBottomBuy,
	CartContainerStyled,
	CartPriceBox,
	LineStyled,
	TotalContainerStyled,
} from './ItemCartStyled';

import ItemCard from './ItemCard';
import { Button } from '@nextui-org/react';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getOrders } from '../../axios/axios-orders';
import { clearError, fetchOrderFail } from '../../redux/orders/orderSlice';
import Loader from '../../components/UI/Loading/Loading';

const ItemCart = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const currentUser = useSelector((state) => state.user.currentUser);
	const { orders, error, loading } = useSelector((state) => state.orders);

	const { cartItems, shippingCost } = useSelector((state) => state.cart);

	useEffect(() => {
		if (!orders) {
			getOrders(dispatch, currentUser);
		}
		if (!currentUser?.token) {
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

	const TotalPrice = cartItems.reduce((acc, item) => {
		return (acc += item.price * item.quantity);
	}, 0);

	return (
		<CartContainerStyled>
			<CardWrapperStyled>
				{cartItems.length ? (
					cartItems.map((item) => {
						return (
							<ItemCard
								key={item.id}
								{...item}
							/>
						);
					})
				) : (
					<p>Dale amiguero, comprá algo</p>
				)}
			</CardWrapperStyled>

			<TotalContainerStyled>
				<h2>Resumen de compra</h2>
				<LineStyled></LineStyled>
				<CartPriceBox>
					<ul>
						<li>Costo:</li>
						<li>${TotalPrice}</li>
					</ul>
					<ul>
						<li>Envio:</li>
						<li>${shippingCost}</li>
					</ul>
					<ul>
						<li>TOTAL</li>
						<li> ${TotalPrice + shippingCost}</li>
					</ul>
					<CartBottomBuy>
						<Button
							color="primary"
							onClick={() => {
								navigate('/checkout');
							}}
							disabled={!cartItems.length}>
							Continuar compra
						</Button>
					</CartBottomBuy>
				</CartPriceBox>
			</TotalContainerStyled>
		</CartContainerStyled>
	);
};

export default ItemCart;
