import styled from 'styled-components';

export const InputContainerStyled = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0 20px 0 20px;
`;
export const InputLabelStyled = styled.label`
	display: flex;
	margin: 1rem 0;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	width: 50%;
`;
export const LoginInputStyled = styled.input`
	width: 360px;
	padding: 1.5rem 2rem;
	color: white;
	background-color: var(--gray-bg);
	border-radius: 15px;
	border: ${({ iserror }) => (iserror ? '1px solid #fb103d ' : 'none')};
	outline: none;
	caret-color: white;

	::placeholder {
		opacity: 80%;
	}
	-webkit-text-fill-color: white;

	:-webkit-autofill,
	:-webkit-autofill:hover,
	:-webkit-autofill:focus {
		-webkit-box-shadow: 0 0 0px 1000px var(--gray-bg) inset;
	}
`;

export const ErrorMessageStyled = styled.p`
	margin: 0;
	margin-top: 5px;
	color: #fb103d;
	font-size: 14px;
`;
