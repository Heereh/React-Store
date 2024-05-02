import React from 'react';
import { NewsletterStyled, SubscribeContainer } from './SubscribeStyled';
import { Field, Form, Formik } from 'formik';

const Subscribe = () => {
	return (
		<SubscribeContainer>
			<h2>Recibí todas las oferta!</h2>
			{/* Newsletters */}
			<NewsletterStyled>
				<h2>Suscribite y enterate de nuestras novedades</h2>
				<Formik
					initialValues={{
						email: '',
					}}
					onSubmit={(e) => {
						e.preventDefault();
					}}>
					<Form>
						<Field
							id="Email"
							name="Email"
							placeholder="Ingrese tu Email para recibir Información!"
						/>
						<button type="submit">Enviar</button>
					</Form>
				</Formik>
			</NewsletterStyled>
		</SubscribeContainer>
	);
};

export default Subscribe;
