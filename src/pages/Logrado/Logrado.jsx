import React from 'react';
import { LContainer } from './LogradoStyled';
import Submit from '../../components/UI/Submit/Submit';
import { useNavigate } from 'react-router-dom';

const Logrado = () => {
	const navigate = useNavigate();
	return (
		<LContainer>
			<p>¡Felidades!</p>
			<span>¡Disfruta de tu pedido!</span>
			<Submit
				onClick={() => {
					navigate('/');
				}}>
				Volver
			</Submit>
		</LContainer>
	);
};

export default Logrado;
