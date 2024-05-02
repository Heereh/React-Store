import { useNavigate } from 'react-router-dom';
import { formatDate } from '../../../utils/FormatDate';
import Botton from '../Botton/Botton';

import {
	IdStyled,
	PedidoContainerStyled,
	PriceStyled,
	TextContainerStyled,
	TitleStyled,
} from './RCardStyled';

export const ResumenCard = ({ createdAt, status, total, _id }) => {
	const navigate = useNavigate();
	return (
		<PedidoContainerStyled>
			<TextContainerStyled>
				<TitleStyled>
					ID de la orden:
					<span> #{_id.slice(0, 7)}</span>
				</TitleStyled>
				<IdStyled>Fecha {formatDate(createdAt)}</IdStyled>
				<PriceStyled>${total}</PriceStyled>
				<Botton
					disabled
					onClick={() => navigate()}>
					Ver compra
				</Botton>
			</TextContainerStyled>
			{/* 	<OrderStatus status={status} /> */}
		</PedidoContainerStyled>
	);
};

export default ResumenCard;
