import { HomeContainerStyled } from './HomeStyled';
import Hero from '../../components/Hero/Hero';
import { CardRecommended } from '../../components/Recommended/CardRecommended';
import Subscribe from '../../components/Subscribe/Subscribe';
import { Opcion } from '../../components/Opcion/Opcion';

const Home = () => {
	return (
		<HomeContainerStyled>
			<Hero />
			<Opcion></Opcion>
			<CardRecommended></CardRecommended>
			<Subscribe />
		</HomeContainerStyled>
	);
};
export default Home;
