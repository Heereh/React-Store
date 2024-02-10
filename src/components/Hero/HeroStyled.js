import { styled } from 'styled-components';

export const HeroContainer = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 600px;
	position: relative;
	cursor: pointer;
	margin-bottom: 278px;
`;

export const HeroLeftStyled = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
	justify-content: center;
	padding: 90px 0 0 90px;
	gap: 20px;
	line-height: 1.1;

	& h2 {
		color: #090909;
		font-size: 1.2rem;
		font-weight: 400;
		font-style: var(--font-Josefin);
		@media (max-width: 373px) {
			text-align: center;
		}
	}
	& p {
		font-style: var(--font-Josefin);
		color: #171717;
		font-size: 3rem;
		font-weight: 500;
	}
	@media screen and (max-width: 975px) {
		align-items: center;
		padding: 0;
	}
`;

export const HeroImg = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 20px;

	& img {
		width: 65px;
	}
`;

export const HeroTextContainer = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
	align-items: start;
	gap: 5px;
`;

export const HeroButtonStyled = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 20px;
	font-size: 1.5rem;

	width: 250px;
	height: 60px;
	border-radius: 75px;
	margin-top: 20px;
	background: red;
	color: white;
	cursor: pointer;
`;

export const HeroRight = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	top: 0;
	left: 700px;
	& img {
		width: 500px;
		height: 700px;
	}
	@media (max-width: 1170px) {
		left: 440px;
	}

	@media (max-width: 975px) {
		display: none;
	}
`;
