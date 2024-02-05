import Carousel from '../../components/Carousel/Carousel';
import { products } from '../../data/ProductData';
import { HeroContainer } from './HeroStyled';

const Hero = () => {
	return (
		<HeroContainer>
			<Carousel data={products}></Carousel>
		</HeroContainer>
	);
};

export default Hero;
