export const products = [
	{
		id: 1,
		name: 'Remera Musculosa Verde ',
		src: 'https://res.cloudinary.com/dyof7irhy/image/upload/v1701197680/s2zuf23oij3wjx6dgevt.jpg',
		price: 3800,
		category: 'Remera',
	},
	{
		id: 2,
		name: 'Remera Musculosa Amarilla',
		src: 'https://res.cloudinary.com/dyof7irhy/image/upload/v1701197680/wiim6zbhnuhtqzfkm7ln.jpg',
		price: 5800,
		category: 'Remera',
	},
	{
		id: 3,
		name: ' Remera Musculosa AzulFrancia',
		src: 'https://res.cloudinary.com/dyof7irhy/image/upload/v1701197680/sjyrqdgp1t2h0vnmfxzl.jpg',
		price: 4800,
		category: 'Musculosa',
	},
	{
		id: 4,
		name: 'Remera Musculosa oi ',
		src: 'https://res.cloudinary.com/dyof7irhy/image/upload/v1701197680/s2zuf23oij3wjx6dgevt.jpg',
		price: 3800,
		category: 'Musculosa',
	},
	{
		id: 5,
		name: 'Remera Musculosa oe',
		src: 'https://res.cloudinary.com/dyof7irhy/image/upload/v1701197680/wiim6zbhnuhtqzfkm7ln.jpg',
		price: 5800,
		category: 'Musculosa',
	},
	{
		id: 6,
		name: 'Remera Musculosa',
		src: 'https://res.cloudinary.com/dyof7irhy/image/upload/v1701197680/sjyrqdgp1t2h0vnmfxzl.jpg',
		price: 4800,
		category: 'Musculosa',
	},
];

export const TotalProducts = products.length;

export const Products = products.reduce((acc, product) => {
	if (!acc[product.category]) {
		acc[product.category] = [];
	}

	acc[product.category] = [...acc[product.category], product];

	return acc;
}, {});
