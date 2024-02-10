import styled from 'styled-components';

export const LayoutContainerStyled = styled.div`
	min-height: 100vh;
	height: auto;
	width: 100%;
	//max-width: 1200px;
	margin: 0 auto;

	& p {
		text-align: center;
	}
`;
export const LayoutWrapper = styled.main`
	display: flex;
	width: 100%;
	max-width: 1400px;
	margin: 0 auto;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 200px;
`;
