import React from 'react';
import { CardsContainer } from './CardRecommendedStyled';
import { useSelector } from 'react-redux';
import Card from '../UI/Card/Card';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const CardRecommended = () => {
	const { recommended } = useSelector((state) => state.recommended);

	const settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 4,
	};

	return (
		<CardsContainer>
			<h2>Productos recomendados</h2>

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
		</CardsContainer>
	);
};
