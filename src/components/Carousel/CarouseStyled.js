import styled, { css } from 'styled-components';

export const CorouselStyled = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	justify-content: center;
	align-items: center;
	position: relative;
`;

export const ImageContainerStyled = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;
export const SlidesStyled = styled.img`
	box-sizing: 0px 0px 7px #666;
	width: 100%;
	height: 100%;
`;

export const ArrowStyled = styled.button`
	position: absolute;
	width: 2rem;
	height: 2rem;
	color: white;
	filter: drop-shadow(0px 0px 5px #555);
	& :hover {
		cursor: pointer;
	}
	& svg {
		width: 100%;
		height: 100%;
	}
	${(props) =>
		props.right === true
			? css`
					right: 1rem;
				`
			: css`
					left: 1rem;
				`}
`;

export const IndicatorStyled = styled.span`
	display: flex;
	position: absolute;
	bottom: 1rem;
`;

export const ButtonIStyled = styled.button`
	background-color: white;
	height: 0.5rem;
	width: 0.5rem;
	border-radius: 100%;
	border: none;
	outline: none;
	box-shadow: 0px 0px 5px #555;
	margin: 0 0.2rem;
	cursor: pointer;
	${(props) =>
		props.active === true
			? css`
					background-color: white;
				`
			: css`
					background-color: grey;
				`}
`;
