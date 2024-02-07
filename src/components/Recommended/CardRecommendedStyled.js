import styled from 'styled-components';

export const CardsContainer = styled.section`
	display: flex;
	flex-direction: column;
	gap: 50px;
	padding: 1rem;
	margin: 0 auto;
	max-width: 1250px;
	padding-top: 150px;

	& h2 {
		font-size: 1.4rem;
		text-transform: uppercase;
		@media screen and (max-width: 373px) {
			text-align: center;
		}
	}
	@media screen and (max-width: 1267px) {
		max-width: 1050px;
	}
`;
