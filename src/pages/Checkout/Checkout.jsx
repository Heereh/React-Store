import React from 'react';
import { CheckoutWrapper } from './CheckoutStyled';
import { useSelector } from 'react-redux';
import FormCheck from '../../components/Checkout/Form/FormCheck';

const Checkout = () => {
	const { cartItems, shippingCost } = useSelector((state) => state.cart);
	const price = cartItems.reduce((acc, item) => {
		return (acc += item.price * item.quantity);
	}, 0);

	return (
		<CheckoutWrapper>
			<FormCheck
				cartItems={cartItems}
				shippingCost={shippingCost}
				price={price}
			/>
		</CheckoutWrapper>
	);
};

export default Checkout;
