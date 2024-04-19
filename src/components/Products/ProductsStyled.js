import styled from 'styled-components';

export const SectionProductsStyled = styled.section`
	display: flex;
	justify-content: center;
	width: 100%;
	height: auto;
	padding-top: 100px;
	position: relative;

	& h1 {
		font-size: 2rem;
		letter-spacing: 2px;
		background-color: none;
		text-align: center;
	}
`;

export const ProductContainerStyled = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	flex-wrap: wrap;
	gap: 15px;
	width: 100%;
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
	padding: 65px;
	gap: 50px;
`;

export const FilterContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 250px;
	height: 500px;
	padding: 20px;
	gap: 30px;
	border-radius: 10px;
	box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

export const Prueba = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	gap: 40px;
`;
