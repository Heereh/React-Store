/* eslint-disable react/prop-types */
import { ErrorMessage, Field } from 'formik';
import {
	ErrorMessageStyled,
	InputContainerStyled,
	LoginInputStyled,
	InputLabelStyled,
} from './InputStyled';

const Input = ({ children, htmlFor, type, id, placeholder, name }) => {
	return (
		<Field name={name}>
			{({ field, form: { errors, touched } }) => (
				<InputContainerStyled>
					<InputLabelStyled htmlFor={htmlFor}>{children}</InputLabelStyled>

					<LoginInputStyled
						type={type}
						placeholder={placeholder}
						id={id}
						{...field}
						iserror={errors[field.name] && touched[field.name]}
					/>

					<ErrorMessage name={field.name}>
						{(message) => <ErrorMessageStyled>{message}</ErrorMessageStyled>}
					</ErrorMessage>
				</InputContainerStyled>
			)}
		</Field>
	);
};

export default Input;
