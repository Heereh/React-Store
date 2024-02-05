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
	box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
		rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
		rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;
