/* eslint-disable react/prop-types */
import { useState } from 'react';
import {
	CorouselStyled,
	ImageContainerStyled,
	ArrowStyled,
	IndicatorStyled,
	ButtonIStyled,
} from './CarouseStyled';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';

const Carousel = ({ data }) => {
	const [slideIndex, SetSlide] = useState(0);

	const nextIndex = () => {
		SetSlide((state) => (state += 1));
		if (slideIndex === data.length - 1) {
			SetSlide(0);
		}
	};

	const prevIndex = () => {
		SetSlide((state) => (state -= 1));
		if (slideIndex === 0) {
			SetSlide(data.length - 1);
		}
	};

	return (
		<CorouselStyled>
			<ArrowStyled
				right
				onClick={nextIndex}>
				<BsArrowRightCircleFill></BsArrowRightCircleFill>
			</ArrowStyled>
			<ImageContainerStyled src={data[slideIndex].src} />
			<ArrowStyled onClick={prevIndex}>
				<BsArrowLeftCircleFill></BsArrowLeftCircleFill>
			</ArrowStyled>
			<IndicatorStyled>
				{data.map((Indicator, item) => {
					return (
						<ButtonIStyled
							key={Indicator.src}
							active={item === slideIndex}
						/>
					);
				})}
			</IndicatorStyled>
		</CorouselStyled>
	);
};

export default Carousel;
