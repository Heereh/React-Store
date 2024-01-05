import {
	ProductContainerStyled,
	SectionProductsStyled,
	BtnContainerStyled,
} from './ProductsStyled';
import Card from '../UI/Card/Card';
import { Button } from '@nextui-org/react';

import { useSelector } from 'react-redux';
// eslint-disable-next-line react/prop-types
const Products = ({ isEnabled }) => {
	let products = useSelector((state) => state.products.products);

	return (
		<SectionProductsStyled>
			<div>
				<h1>PRODUCTOS DESTACADOS</h1>
			</div>
			<BtnContainerStyled style={{ display: isEnabled ? 'flex' : 'none' }}>
				<Button>Opcion1</Button>
				<Button>Opcion2</Button>
				<Button>Opcion3</Button>
				<Button>Opcion4</Button>
			</BtnContainerStyled>
			<ProductContainerStyled>
				{Object.values(products).map((clothes) => {
					return clothes.map((clothe) => {
						return (
							<Card
								{...clothe}
								key={clothe.id}
							/>
						);
					});
				})}
			</ProductContainerStyled>
		</SectionProductsStyled>
	);
};

export default Products;
