import styled from 'styled-components';

import { LoginInputStyled } from '../../components/UI/Input/InputStyled';
import { FormStyled } from '../Login/LoginStyled';

export const FormContact = styled(FormStyled)`
	box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
	background: white;
	& h2 {
		color: #17171c;
	}
	& button {
		width: 100px;
		height: 40px;
		margin: 10px 0 0 0;
		padding: 0;
		border-radius: 10px;
		border: 1px solid gray;
		font-size: 18px;
		font-weight: 400;
	}
`;

export const ContactInput = styled(LoginInputStyled)`
	background-color: white;
	border-bottom: 1px solid gray;
	-webkit-text-fill-color: #171717;
`;
