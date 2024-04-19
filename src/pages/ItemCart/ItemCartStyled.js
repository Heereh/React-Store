import styled, { css } from 'styled-components';

export const CartContainerStyled = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-start;
	max-width: 1200px;
	width: 100%;
	height: auto;
	gap: 20px;
	margin: 20px 30px 300px 30px;

	& h2 {
	}
`;

export const CardWrapperStyled = styled.div`
	display: flex;
	flex-direction: column;
	width: 67%;
	border-radius: 6px;
	box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
		rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
`;

export const ItemRowStyled = styled.article`
	display: flex;
	box-sizing: border-box;
	flex-wrap: wrap;
	position: relative;
	padding: 30px 10px;
	width: 100%;
`;

export const ItemCartCont = styled.div`
	display: flex;
	flex-direction: column;
`;

export const ItemCardStyled = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
`;

export const ItemCardImgStyled = styled.div`
	cursor: pointer;
	margin-right: 20px;
	width: 100px;

	& img {
		width: 64px;
		height: 64px;
	}
`;

export const ItemCartInfoStyled = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	overflow: hidden;
	border-collapse: collapse;
`;

export const ItemCardTitleStyled = styled.div`
	cursor: pointer;
	line-height: 1.1;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	& span {
		font-size: 1rem;
		display: inline-block;
		color: #000;
		text-transform: uppercase;
	}
`;

export const ItemCartActionStyled = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	width: 67%;
	padding-top: 20px;
	gap: 20px;
	& span {
		display: flex;
		font-size: 0.9rem;
		line-height: 1.1;
		text-transform: uppercase;
		color: #3483fa;
	}
`;

export const CartActionStyled = styled.div`
	display: flex;
	justify-content: start;
	align-items: center;
	width: 104px;
	width: 100%;
	padding: 20px 0 0 80px;
	gap: 20px;
`;

export const CartButtonContainer = styled.div`
	display: flex;
	align-items: center;
`;

export const ButtonCartStyled = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 36px;
	height: 36px;
	border: none;
	border-radius: 50%;
	background-color: transparent;
	color: ${(props) => (props.disabled === true ? 'white' : 'steelblue')};
	${(props) =>
		props.disabled === true
			? css`
					cursor: not-allowed;
			  `
			: ''}
	& svg {
		width: 100%;
		height: 100%;
	}
`;

export const CartTotalStyled = styled.div`
	display: flex;
	width: 25px;
	font-size: 1rem;
	border-radius: unset;
	box-shadow: none;
	background-color: transparent;

	& input {
		display: flex;
		align-items: center;
		width: 100%;
	}
`;

export const TotalContainerStyled = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: start;
	width: 300px;
	box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
	& h2 {
		font-size: 1.5rem;
		text-transform: uppercase;
		padding: 10px 10px 10px 10px;
	}
`;

export const CartPriceBox = styled.div`
	width: 100%;
	display: flex;
	border-top: 1px solid #ccc;
	flex-direction: column;
	gap: 10px;
	& ul {
		padding: 0 10px;
		display: flex;
		width: 100%;
		justify-content: space-between;
	}
	& ul:nth-child(1) {
		padding: 10px 10px 0 10px;
	}
	& ul:nth-child(3) {
		padding: 0 10px 10px 10px;
	}
`;

export const CartInfoPrice = styled.ul`
	padding: 0 10px;
	display: flex;
	width: 100%;
	justify-content: space-between;
`;

export const CartBottomBuy = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 10px 0;
	border-top: 1px solid #ccc;

	& button {
		width: 100%;
		margin: 10px;
		font-size: 1.1rem;
	}
`;

export const LineStyled = styled.div`
	width: 100%;
	border-bottom: 1px solid #ccc;
	padding: 0px;
`;
