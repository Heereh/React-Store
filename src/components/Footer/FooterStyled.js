import styled from 'styled-components';
export const FooterContainerStyled = styled.footer`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	padding: 5rem 0 2rem 0;
	width: 100%;
	background-color: black;
`;

export const LinksFooterContainerStyled = styled.div`
	display: flex;
	justify-content: space-around;
	gap: 1rem;
	max-width: 1400px;
	width: 100%;
	flex-wrap: wrap;

	@media (max-width: 973px) {
		justify-content: space-around;
		align-items: center;
	}
	@media (max-width: 471px) {
		gap: 2rem;
	}
`;

export const FooterColumnOne = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 20px;
	color: white;
	width: 462px;
	& h2 {
		font-size: 2rem;
		font-weight: 600;
	}
	& p {
		font-size: 1.2rem;
		font-weight: 400;
	}

	& li {
		display: flex;
		gap: 20px;
	}

	& svg {
		width: 32px;
		height: 32px;
	}
`;

export const FooterColumnTwo = styled.div`
	display: flex;
	flex-direction: column;
	color: white;
	width: 240px;
	& h2 {
		font-size: 1.4rem;
		font-weight: 500;
	}

	& ul {
		display: flex;
		flex-direction: column;
		gap: 5px;
	}
	& li {
		font-size: 0.9rem;
		font-weight: 400;
		cursor: pointer;
	}
`;

export const FooterColumnThree = styled(FooterColumnTwo)``;
