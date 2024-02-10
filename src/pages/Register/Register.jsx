import React from 'react';
import { FormStyled } from '../Login/LoginStyled';

import Submit from '../../components/UI/Submit/Submit';
import Input from '../../components/UI/Input/Input';

import { Formik } from 'formik';
import { registerInitialValues } from '../../formik/InitialValues';
import { registerValidationSchema } from '../../formik/ValidationSchema';

import { createUser } from '../../axios/axios-user';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from '../../redux/user/userslice';

import useRedirect from '../../hooks/useRedirect';

const Register = () => {
	const dispatch = useDispatch();
	useRedirect('/');
	return (
		<div>
			<Formik
				initialValues={registerInitialValues}
				validationSchema={registerValidationSchema}
				onSubmit={async (values, actions) => {
					const user = await createUser(
						values.name,
						values.email,
						values.password,
					);
					if (user) {
						dispatch(
							setCurrentUser({
								...user.usuario,
							}),
						);
					}
					actions.resetForm();
				}}>
				<FormStyled>
					<h2>Crea tu cuenta</h2>
					<Input
						name="name"
						type="text"
						placeholder="Nombre"
					/>
					<Input
						name="email"
						type="text"
						placeholder="Email"
					/>
					<Input
						name="password"
						type="password"
						placeholder="Password"
					/>
					<a href="/login">
						<p>Ya tienes cuenta? Inicia Sesión</p>
					</a>
					<Submit>Registrate</Submit>
				</FormStyled>
			</Formik>
		</div>
	);
};

export default Register;
