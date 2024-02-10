import React from 'react';
import { CheckoutDatosStyled, Formik, Form } from './FormCheckStyled';
import Input from '../../UI/Input/Input';
import Submit from '../../UI/Submit/Submit';
import { checkoutIinitialValues } from '../../../formik/InitialValues';
import { checkoutValidationSchema } from '../../../formik/ValidationSchema';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createOrder } from '../../../axios/axios-orders';
import { clearOrders } from '../../../redux/orders/orderSlice';
import Loader from '../../UI/Loading/Loading';
import { Button } from '@nextui-org/react';

const FormCheck = ({ cartItems, ShippingCost, price }) => {
	const dispatch = useDispatch();
	const { currentUser } = useSelector((state) => state.user);
	const navigate = useNavigate();
	return (
		<CheckoutDatosStyled>
			<h2>Ingresá tus datos</h2>
			<Formik
				initialValues={checkoutIinitialValues}
				validationSchema={checkoutValidationSchema}
				onSubmit={async (values) => {
					const orderData = {
						items: cartItems,
						price,
						ShippingCost,
						total: price + ShippingCost,
						shippingDetails: { ...values },
					};
					try {
						await createOrder(orderData, dispatch, currentUser);
						navigate('/succeded');
						dispatch(clearOrders());
					} catch (error) {
						alert('Hubo un error al crear el pedido');
					}
				}}>
				{({ isSubmitting }) => (
					<Form>
						<Input
							name="name"
							htmlFor="nombre"
							type="text"
							id="nombre"
							placeholder="Tu nombre">
							Nombre
						</Input>
						<Input
							name="cellphone"
							htmlFor="celular"
							type="text"
							id="celular"
							placeholder="Tu celular">
							Celular
						</Input>
						<Input
							name="location"
							htmlFor="localidad"
							type="text"
							id="localidad"
							placeholder="Tu localidad">
							Localidad
						</Input>
						<Input
							name="address"
							htmlFor="direccion"
							type="text"
							id="direccion"
							placeholder="Tu dirección">
							Dirección
						</Input>
						<div>
							<Button
								disabled={!cartItems.length || isSubmitting}
								color="primary"
								type="submit"
								>
								{isSubmitting ? 'Iniciando tu pedido' : 'Iniciando tu pedido'}
							</Button>
						</div>
					</Form>
				)}
			</Formik>
		</CheckoutDatosStyled>
	);
};

export default FormCheck;
