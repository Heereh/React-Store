/* eslint-disable react/prop-types */
import React from 'react';
import {
	ButtonCartStyled,
	CartActionStyled,
	CartButtonContainer,
	CartTotalStyled,
	ItemCardStyled,
	ItemCardImgStyled,
	ItemCardTitleStyled,
	ItemCartActionStyled,
	ItemCartInfoStyled,
	ItemRowStyled,
} from './ItemCartStyled';
import { CiCirclePlus, CiCircleMinus } from 'react-icons/ci';

import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../redux/cart/cartSlice';

const ItemCard = ({ src, name, quantity, id, price }) => {
	const dispatch = useDispatch();

	return (
		<ItemRowStyled>
			<ItemCardStyled>
				{/* Card en si */}
				<ItemCardImgStyled>
					<img
						src={src}
						alt={name}
					/>
				</ItemCardImgStyled>
				<ItemCartInfoStyled>
					<ItemCardTitleStyled>
						<span>{name}</span>
					</ItemCardTitleStyled>
					<ItemCartActionStyled></ItemCartActionStyled>
				</ItemCartInfoStyled>
			</ItemCardStyled>

			<CartActionStyled>
				<CartButtonContainer>
					<ButtonCartStyled>
						<CiCircleMinus
							onClick={() => {
								dispatch(removeFromCart(id));
							}}
						/>
					</ButtonCartStyled>
				</CartButtonContainer>
				<CartTotalStyled>{quantity}</CartTotalStyled>

				<ButtonCartStyled>
					<CiCirclePlus
						onClick={() => {
							dispatch(addToCart({ src, name, price, quantity, id }));
						}}></CiCirclePlus>
				</ButtonCartStyled>
			</CartActionStyled>
		</ItemRowStyled>
	);
};

export default ItemCard;
