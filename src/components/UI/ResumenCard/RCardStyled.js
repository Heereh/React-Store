import styled from 'styled-components';

export const MisOrdenesContainerStyled = styled.div`
	padding: 1rem;
	display: flex;
	/* justify-content: center; */
	flex-wrap: wrap;
	gap: 20px;
	max-width: 1500px;
	margin: 0 auto;
`;

export const PedidoContainerStyled = styled.div`
	//	background: var(--wgray-bg);
	background-color: var(--wgray-bg);
	width: 380px;
	border-radius: 15px;
	padding: 1rem 1.4rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: relative;
`;

export const TextContainerStyled = styled.div`
	display: flex;
	flex-direction: column;
`;

export const TitleStyled = styled.p`
	margin: 0;
	font-size: 1rem;
	& span {
		color: var(--skyblue-txt);
	}
`;

export const IdStyled = styled.p`
	font-size: 1rem;
	color: black;
	//color: #666;
`;

export const PriceStyled = styled.p`
	font-weight: 800;
	font-size: 1.5rem;
	margin: 0;
`;
