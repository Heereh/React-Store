import { Formik } from 'formik';

import { ContactInput, FormContact } from './ContactStyled';

const Contact = () => {
	return (
		<Formik
			initialValues={{
				name: '',
				email: '',
			}}
			onSubmit={(e) => {
				e.preventDefault();
			}}>
			<FormContact>
				<h2>Contáctanos</h2>
				<ContactInput
					name="name"
					type="name"
					placeholder="Escribe tu nombre.."
				/>
				<ContactInput
					name="email"
					type="email"
					placeholder="Dejanos saber tu email.."
				/>
				<ContactInput
					name="Message:"
					type="text"
					placeholder="Dejanos saber tu opinión sobre nosotros..."
				/>
				<button type="submit">Enviar</button>
			</FormContact>
		</Formik>
	);
};

export default Contact;
