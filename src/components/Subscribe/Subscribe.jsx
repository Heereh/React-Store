import React from 'react';
import { ImagesContainer, ImgStyled, NewsletterStyled, SubscribeContainer } from './SubscribeStyled';
import { Field, Form, Formik } from 'formik';

const Subscribe = () => {
	return (
		<SubscribeContainer>
			<h2>Enterate de nuevos productos en nuestro Instagram!</h2>
			{/* img */}
			<ImagesContainer>
				<ImgStyled>
					<img
						src="https://http2.mlstatic.com/D_NQ_649369-MLA73593856960_122023-OO.jpg"
						alt=""
					/>
				</ImgStyled>
				<ImgStyled>
					<img
						src="https://http2.mlstatic.com/D_NQ_649369-MLA73593856960_122023-OO.jpg"
						alt=""
					/>
				</ImgStyled>
				<ImgStyled>
					<img
						src="https://http2.mlstatic.com/D_NQ_649369-MLA73593856960_122023-OO.jpg"
						alt=""
					/>
				</ImgStyled>
				<ImgStyled>
					<img
						src="https://http2.mlstatic.com/D_NQ_649369-MLA73593856960_122023-OO.jpg"
						alt=""
					/>
				</ImgStyled>
			</ImagesContainer>
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
