import styled from 'styled-components';

export const SectionProductsStyled = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: auto;

	& h1 {
		font-size: 2rem;
		letter-spacing: 2px;
		background-color: none;
	}
`;

export const ProductContainerStyled = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	flex-wrap: wrap;
	gap: 15px;
	width: 100%;
	padding-top: 100px;
`;

export const AllProductWrapper = styled.section`
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 1400px;
	text-align: center;
	/* justify-content: center;
  align-items: center; */
`;

export const BtnContainerStyled = styled.div`
	color: fff;
	display: flex;
	justify-content: center;
	gap: 1rem;
	flex-wrap: wrap;
`;
