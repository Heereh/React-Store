import {
	ProductContainerStyled,
	SectionProductsStyled,
	FilterContainer,
	BtnContainerStyled,
} from './ProductsStyled';
import Card from '../UI/Card/Card';
import { Button, Radio, RadioGroup } from '@nextui-org/react';

import { useDispatch, useSelector } from 'react-redux';
import { selectCategory } from '../../redux/categories/categoriesSlice';
import { useEffect, useState } from 'react';
import { INITIAL_LIMIT } from '../../utils/constant';
const Products = () => {
	let products = useSelector((state) => state.products.products);
	const dispatch = useDispatch();

	const [limit, setLimit] = useState(INITIAL_LIMIT);

	const { selectedCategory, categories } = useSelector(
		(state) => state.categories,
	);

	const TotalProducts = useSelector((state) => state.products.TotalProducts);

	if (selectedCategory) {
		products = { [selectedCategory]: products[selectedCategory] };
	}

	useEffect(() => {
		setLimit(INITIAL_LIMIT);
	}, [selectedCategory]);

	return (
		<SectionProductsStyled>
			<FilterContainer>
				<RadioGroup
					label="Categorias"
					color="primary">
					{categories.map((catego) => {
						return (
							<Radio
								value={catego.category}
								key={catego.category}
								onClick={() => {
									dispatch(selectCategory(catego.category));
								}}>
								{catego.category}
							</Radio>
						);
					})}
				</RadioGroup>
				{/* <div>
					<Slider
						label="Rango de precios"
						step={100}
						minValue={0}
						maxValue={20000}
						defaultValue={[4000, 8000]}
						formatOptions={{ style: 'currency', currency: 'ARS' }}
					/>
				</div> */}
			</FilterContainer>
			<ProductContainerStyled>
				{Object.values(products).map((clothes) => {
					return clothes.map((clothe) => {
						if (limit >= clothe.id || selectedCategory) {
							return (
								<Card
									{...clothe}
									key={clothe.id}
								/>
							);
						}
						return null;
					});
				})}

				{!selectedCategory && (
					<BtnContainerStyled>
						<Button
							onClick={() => setLimit((prev) => prev - INITIAL_LIMIT)}
							disabled={INITIAL_LIMIT === limit}>
							Ver menos
						</Button>
						<Button
							onClick={() => setLimit((prev) => prev + INITIAL_LIMIT)}
							disabled={TotalProducts <= limit}>
							ver más
						</Button>
					</BtnContainerStyled>
				)}
			</ProductContainerStyled>
		</SectionProductsStyled>
	);
};

export default Products;
