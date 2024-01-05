import { HomeContainerStyled } from './HomeStyled';
import Hero from '../../components/Hero/Hero';
import Products from '../../components/Products/Products';

const Home = () => {
	return (
		<HomeContainerStyled>
			<Hero />
			<Products />
		</HomeContainerStyled>
	);
};
export default Home;
