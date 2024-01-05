import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const CardContainerStyled = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;

	width: 350px;
	border-radius: 10px;
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const CardImageContainerStyled = styled.div`
	height: 200px;
	width: 100%;
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
		font-size: 1.7rem;
		text-transform: uppercase;
	}
`;
export const CardContainerBottom = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	padding: 10px 10px;
	flex-direction: column;
	bottom: 10px;
	& span {
		margin-top: 10px;
		font-size: 1.4rem;
		line-height: 2.2rem;
		padding-bottom: 10px;
		color: green;
	}
	& ul {
		display: flex;
		width: 100%;
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
