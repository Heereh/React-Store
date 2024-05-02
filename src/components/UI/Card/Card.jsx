import { useState } from 'react';
import {
	CardContainerStyled,
	CardImageContainerStyled,
	CardContentStyled,
	CardContainerBottom,
	LinkItem,
	Pruebas,
} from './CardStyled';
import { Button } from '@nextui-org/react';
import Botton from '../Botton/Botton';
import { FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../redux/cart/cartSlice';

// eslint-disable-next-line react/prop-types
const Card = ({ name, id, src, price }) => {
	const [favColor, setFavColor] = useState(`#ababab`);

	const onFavButtonClick = () => {
		const changeColorSVG = favColor === `#ababab` ? 'yellow' : `#ababab`;
		setFavColor(changeColorSVG);
	};

	const dispatch = useDispatch();

	return (
		<CardContainerStyled
			key={id}
			as={motion.div}
			whileHover={{ scale: 1.02 }}>
			<CardImageContainerStyled>
				<Button
					onClick={onFavButtonClick}
					className="z-0 group inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-3xl   gap-unit-2 rounded-full px-unit-0 data-[pressed=true]:scale-[0.97] transition-transform-colors-opacity motion-reduce:transition-none bg-transparent data-[hover=true]:bg-default/80 min-w-unit-10 w-unit-10 h-unit-10 absolute top-3 right-3 text-default-400 data-[liked=true]:text-warning">
					<FaStar fill={favColor} />
				</Button>
				<img
					key={id}
					src={src}
					alt={name}
				/>
			</CardImageContainerStyled>

			<CardContentStyled>
				<Pruebas>
					<h2 className="w-full text-center">{name}</h2>
				</Pruebas>

				<CardContainerBottom>
					<span>${price}</span>
					<ul>
						{/* <LinkItem to={`/products/${}`}>Ver más</LinkItem> */}
						<Botton
							radius={10}
							onClick={() => {
								dispatch(addToCart({ src, name, price, id }));
							}}>
							Agregar
						</Botton>
					</ul>
				</CardContainerBottom>
			</CardContentStyled>
		</CardContainerStyled>
	);
};

export default Card;
