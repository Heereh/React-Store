import { createSlice } from '@reduxjs/toolkit';
import {
	addItemToCart,
	removeItemFromCart,
	resetShippingCost,
} from './cart-utils';
import { SHIPPING_COST } from '../../utils/priceOrder';

const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		cartItems: [],
		shippingCost: 0,
	},
	reducers: {
		addToCart: (state, action) => {
			return {
				...state,
				cartItems: addItemToCart(state.cartItems, action.payload),
				shippingCost: SHIPPING_COST,
			};
		},
		removeFromCart: (state, action) => {
			return {
				...state,
				cartItems: removeItemFromCart(state.cartItems, action.payload),
				shippingCost: resetShippingCost(state.cartItems, SHIPPING_COST),
			};
		},

		clearAllCart: (state) => {
			return {
				...state,
				cartItems: [],
				shippingCost: 0,
			};
		},
	},
});

export const { addToCart, clearAllCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
