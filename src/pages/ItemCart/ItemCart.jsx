import React from 'react';
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

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ItemCart = () => {
	//const navigate = useNavigate();
	const { cartItems, shippingCost } = useSelector((state) => state.cart);

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
							onClick={() => {}}
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
