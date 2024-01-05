import * as Yup from 'yup';

export const checkoutValidationSchema = Yup.object({
	name: Yup.string().trim().required('Campo Requerido'),
	cellphone: Yup.string().trim().required('Campo Requerido'),
	location: Yup.string().trim().required('Campo Requerido'),
	address: Yup.string().trim().required('Campo Requerido'),
});

export const registerValidationSchema = Yup.object({
	name: Yup.string().trim().required('Este campo es obligatorio'),
	email: Yup.string()
		.email('Correo electronico invalido')
		.required('Este campo es obligatorio'),
	password: Yup.string()
		.min(6, 'Mínimo de caracteres: 6')
		.required('Campo Requerido'),
});

export const loginValidationSchema = Yup.object({
	email: Yup.string().email('Email inválido').required('Campo Requerido'),
	password: Yup.string()
		.min(6, 'Mínimo de caracteres: 6')
		.required('Campo Requerido'),
});
