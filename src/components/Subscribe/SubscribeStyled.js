import styled from 'styled-components';

export const SubscribeContainer = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	gap: 20px;
	padding-bottom: 200px;
	& h2 {
		font-size: 2rem;
		font-weight: 600;
		color: #171717;
		@media (max-width: 1024px) {
			h2 {
				font-size: 1.8rem;
			}
			text-align: center;
		}
		@media (max-width: 425px) {
			font-size: 1.4rem;
		}
	}
`;

export const ImagesContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;
	flex-wrap: wrap;
	padding: 0 1rem;
`;

export const NewsletterStyled = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
	text-align: center;

	& form {
		padding-top: 50px;
		display: flex;
		gap: 10px;
		justify-content: center;
	}
	& input {
		width: 50%;
		height: 50px;
		border-bottom: 1px solid black;
		background: transparent;
		outline: none;
		font-size: 21px;
	}

	& button {
		background: black;
		font-size: 18px;
		width: 80px;
		border-radius: 10px;
		color: white;
	}
	@media (max-width: 641px) {
		h2 {
			font-size: 1.3rem;
		}
	}

	@media (max-width: 375px) {
		h2 {
			font-size: 1.3rem;
		}
		form {
			justify-content: center;
		}
	}
`;
