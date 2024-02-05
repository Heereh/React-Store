import React from 'react';
import { OpcionBox, OpcionSection } from './OpcionStyled';

/* Icon */

import { MdOutlineSecurity, MdAddCard, MdMailOutline } from 'react-icons/md';

export const Opcion = () => {
	return (
		<OpcionSection>
			<OpcionBox>
				<MdOutlineSecurity />
				<h2>Seguridad, confía en nosotros</h2>
				<p>
					Tuviste inconvenientes? Devuelvelo! siempre buscare la
					manera mas facil de solucionar tus problemas!
				</p>
				<span>Conoce más de nuestra seguridad</span>
			</OpcionBox>
			<OpcionBox>
				<MdAddCard />
				<h2>Elegí cómo pagar</h2>
				<p>
					Podés pagar con tarjeta, débito, efectivo, transferencia bancaria o
					hasta 12 cuotas
				</p>
				<span>Cónoce sobre los distintos métodos</span>
			</OpcionBox>
			<OpcionBox>
				<MdMailOutline />
				<h2>Envíos a todo el país</h2>
				 <p>
					Seleccioná tu método de envío y recibí tu pedido en cualquier punto
					del país
				</p> 
				<span>Más sobre este beneficio</span>
			</OpcionBox>
		</OpcionSection>
	);
};
