import { FormStyled } from './LoginStyled';
import Input from '../../components/UI/Input/Input';
import Submit from '../../components/UI/Submit/Submit';

import { Formik } from 'formik';
import { loginInitialValues } from '../../formik/InitialValues';
import { loginValidationSchema } from '../../formik/ValidationSchema';

import { setCurrentUser } from '../../redux/user/userslice';
import { useDispatch } from 'react-redux';

import useRedirect from '../../hooks/useRedirect';
import { loginUser } from '../../axios/axios-user';

const Login = () => {
	const dispatch = useDispatch();
	useRedirect('/');

	return (
		<Formik
			initialValues={loginInitialValues}
			validationSchema={loginValidationSchema}
			onSubmit={async (values) => {
				const user = await loginUser(values.email, values.password);
				if (user) {
					dispatch(
						setCurrentUser({
							...user.usuario,
							token: user.token,
						}),
					);
				}
			}}>
			<FormStyled>
				<h2>Iniciar Sesión</h2>
				<Input
					name="email"
					type="emaiil"
					placeholder="Email"
				/>
				<Input
					name="password"
					type="password"
					placeholder="Password"
				/>
				<Submit type="button">Enviar</Submit>
			</FormStyled>
		</Formik>
	);
};

export default Login;
