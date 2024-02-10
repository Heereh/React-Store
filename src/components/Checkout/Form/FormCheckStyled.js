import styled from 'styled-components';
import { Formik as FormikContainer, Form as FormikForm } from 'formik';

export const CheckoutDatosStyled = styled.div`
	width: 75%;
	display: flex;
	flex-direction: column;
	
	& h2 {
		font-size: 1.4rem;
		text-transform: uppercase;
		margin-bottom: 10px;
	}
`;

export const Formik = styled(FormikContainer)`
	display: flex;
	flex-wrap: wrap;
`;
export const Form = styled(FormikForm)`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	border: 1px solid var(--gray-bg);
	border-radius: 10px;
	padding: 2rem;
	& input {
		background-color: white;
		border: 1px solid var(--gray-bg);
		-webkit-text-fill-color: #000;
	}
	& button {
		margin: 25px 0 0 20px;
	}
`;
