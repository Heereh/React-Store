import styled from 'styled-components';
import { Form as FormikForm } from 'formik';

export const FormStyled = styled(FormikForm)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: black;
	border: 1px solid gray;
	padding: 20px;
	gap: 20px;
	border-radius: 10px;
	min-width: 380px;
	max-width: 420px;
	width: 100%;
	cursor: default;

	& h2 {
		color: white;
		font-size: 2.2rem;
		margin: 12px 0;
		flex-direction: column;
	}

	& Button {
		font-size: 1.2rem;
		font-weight: 500;
		padding: 10px;
		margin: 0 0 20px 0;
		border: 2px solid white;
		background-color: white;
		color: #171716;
	}

	& a p {
		color: var(--skyblue-txt);
	}
`;

export const InputContainerStyled = styled.div`
	max-width: 300px;
	margin: 0 auto;
	width: 100%;
	display: flex;
	flex-direction: column;
	padding-bottom: 20px;

	& label {
		color: white;
		font-size: 1.2rem;
		line-height: 40px;
	}

	& input {
		padding: 10px;
		width: 100%;
		border: none;
		outline: none;
		background: #282c34;
		color: #fff;
	}
`;
