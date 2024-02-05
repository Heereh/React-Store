import { products } from '../data/ProductData';

export const pickRandomProducts = (item) => {
	const newArray = [];

	while (newArray.length < item) {
		const indexRandom = Math.floor(Math.random() * products.length);

		if (!newArray.length) {
			newArray.push(products[indexRandom]);
		}
		const productExist = newArray.find((newProduct) => {
			return newProduct.id === products[indexRandom].id;
		});
		if (!productExist) {
			newArray.push(products[indexRandom]);
		}
	}
  return newArray
};
