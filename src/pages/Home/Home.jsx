import { HomeContainerStyled } from './HomeStyled';
import Hero from '../../layouts/Hero/Hero';
import Products from '../../layouts/Products/Products';


const Home = () => {
  return (
    <HomeContainerStyled>
      <Hero />
      <Products />
    </HomeContainerStyled>
  );
};
export default Home;
