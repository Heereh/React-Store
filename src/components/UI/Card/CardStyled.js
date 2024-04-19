import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const CardContainerStyled = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
	margin: 10px 0;

	max-width: 250px;
	border-radius: 10px;
	box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;

export const CardImageContainerStyled = styled.div`
	height: 200px;
	width: 250px;
	object-fit: cover;
	& img {
		width: 100%;
		object-fit: cover;
		height: 100%;
	}
	& Button {
		position: absolute;
		right: 5px;
	}
`;

export const CardContentStyled = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: start;
	position: relative;

	& h2 {
		font-size: 1.1rem;
		font-weight: 300;
		text-transform: uppercase;
		width: 77%;
		@media (max-width: 1150) {
			font-size: 1px;
		}
	}
`;

export const Pruebas = styled.div`
	width: 100%;
	height: 82px;
	display: flex;
	justify-content: center;
`;

export const CardContainerBottom = styled.div`
	display: flex;
	width: 100%;
	justify-content: center;
	padding: 10px 10px;
	flex-direction: column;
	bottom: 10px;
	& span {
		margin-top: 10px;
		font-size: 1.4rem;
		line-height: 2.2rem;
		padding-bottom: 10px;
		color: green;
		font-weight: 300;
	}
	& ul {
		display: flex;
		width: 100%;
		align-items: center;
		justify-content: space-between;
	}
`;
export const LinkItem = styled(Link)`
	color: #3da9fc;
	border: 1px solid #3da9fc;
	border-radius: 20px;
	padding: 5px 15px;
	transition: all 0.3s ease;

	:hover {
		background: #3da9fc;
		color: fff;
	}
`;
