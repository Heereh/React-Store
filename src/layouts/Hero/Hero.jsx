import Carousel from '../../components/Carousel/Carousel';
import ProductData from '../../data/ProductData';
import { HeroContainer } from './HeroStyled';
const Hero = () => {
  return (
    <HeroContainer>
      <Carousel data={ProductData}></Carousel>
    </HeroContainer>
  );
};

export default Hero;
