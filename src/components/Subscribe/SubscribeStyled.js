import styled from 'styled-components';

export const SubscribeContainer = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	padding-top: 120px;
	gap: 40px;
	& h2 {
		font-size: 2rem;
		font-weight: 600;
		color: #171717;
	}
`;

export const ImagesContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;
	flex-wrap: wrap;
`;

export const ImgStyled = styled.div`
	width: 227px;
	height: 250px;

	cursor: pointer;
	flex-grow: 1;
	position: relative;
	overflow: hidden;

	& img {
		height: 100%;
		left: 50%;
		position: absolute;
		transform: translateX(-50%);
	}
`;

export const NewsletterStyled = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;

	& form {
		padding-top: 50px;
		display: flex;
		gap: 10px;
	}
	& input {
		width: 90%;
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
`;
