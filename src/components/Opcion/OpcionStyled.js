import styled from 'styled-components';

export const OpcionSection = styled.section`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 200px;

	@media screen and (max-width: 852px) {
		flex-wrap: wrap;
		justify-content: center;
		gap: 40px;
	}


`;

export const OpcionBox = styled.div`
	max-width: 378px;
	padding: 10px;
	height: 300px;
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	gap: 10px;

	& svg {
		width: 100px;
		height: 100px;
	}
	& h2 {
		font-size: 1.34rem;
		color: #e13679;
		font-weight: 600;
	}
	& p {
		font-size: 1.1rem;
		line-height: 1.2;
		color: #372835;
		width: 220px;
		height: 104px;
	}

	& span {
		font-size: 0.95rem;
		font-family: var(--font-Karla);
		font-weight: 600;
		color: #7396ec;
		cursor: pointer;
	}

	@media screen and (max-width: 852px) {
		flex-wrap: nowrap;
	}
`;
