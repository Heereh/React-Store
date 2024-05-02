import styled from 'styled-components';

export const ContainerResumen = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: start;
	padding-top: 4rem;
	width: 100%;
	height: auto;
	padding-bottom: 200px;
	& h2 {
		font-size: 2rem;
		font-weight: 500;
		text-transform: uppercase;
	}
`;

export const ResumenCardContainer = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	padding-top: 12px;
	gap: 1rem;
	width: 100%;
`;
