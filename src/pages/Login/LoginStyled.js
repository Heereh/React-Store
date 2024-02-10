import styled from 'styled-components';
import { Form as FormikForm } from 'formik';

export const FormStyled = styled(FormikForm)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	//background: black;
	border: 1px solid gray;
	padding: 20px;
	gap: 20px;
	border-radius: 10px;
	min-width: 380px;
	max-width: 420px;
	width: 100%;
	margin: 40px;
	cursor: default;

	& h2 {
		color: black;
		font-size: 2.2rem;
		margin: 12px 0;
		flex-direction: column;
		text-transform: uppercase;
	}

	& Button {
		font-size: 1.1rem;
		font-weight: 500;
		margin: 0 0 20px 0;
	}

	& a p {
		color: var(--skyblue-txt);
	}
	& input {
		background-color: white;
		border: 1px solid var(--gray-bg);
		-webkit-text-fill-color: #000;
	}
`;
