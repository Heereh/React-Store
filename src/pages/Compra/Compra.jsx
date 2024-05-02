import React from 'react';
import {} from './CompraStyled';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
const Compra = () => {
	const { currentUser } = useSelector((state) => state.user);
	const { order } = useSelector((state) => state.orders);
	const dispatch = useDispatch();
	const { orderId } = useParams();
	return <div>Compra</div>;
};

export default Compra;
