import React from 'react';
import { useSelector } from 'react-redux';
import { CardsContainer } from './CardRecommendedStyled';
import Card from '../UI/Card/Card';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion } from 'framer-motion';

export const CardRecommended = () => {
	const { recommended } = useSelector((state) => state.recommended);

	//Arrow
	function ArrowSample(props) {
		const { className, style, onClick } = props;

		return (
			<motion.div
				className={className}
				whileTap={{ scale: 0.95 }}
				style={{
					...style,
					display: 'block',
					background: 'black',
					borderRadius: 100,
					transform: `translate(0, -0%)`,
				}}
				onClick={onClick}
			/>
		);
	}

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 4,
		nextArrow: <ArrowSample />,
		prevArrow: <ArrowSample />,
		responsive: [
			{
				breakpoint: 1066,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
					arrows: false,
				},
			},
			{
				breakpoint: 852,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					arrows: false,
				},
			},
			{
				breakpoint: 451,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
				},
			},
		],
	};

	return (
		<CardsContainer>
			<h2>Productos recomendados</h2>
			<>
				<Slider {...settings}>
					{recommended.map((recomendado) => {
						return (
							<Card
								key={recomendado.id}
								{...recomendado}
							/>
						);
					})}
				</Slider>
			</>
		</CardsContainer>
	);
};
