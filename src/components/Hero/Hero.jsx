import {
	HeroButtonStyled,
	HeroContainer,
	HeroImg,
	HeroLeftStyled,
	HeroRight,
	HeroTextContainer,
} from './HeroStyled';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
	const navigate = useNavigate();
	return (
		<HeroContainer>
			<HeroLeftStyled>
				<h2>NUEVOS PRODUCTOS LLEGARON!</h2>
				<HeroTextContainer>
					<HeroImg>
						<p>Nuevos</p>
						<img src={"../src/assets/img/hand_icon.png"} />
					</HeroImg>
					<p>Productos</p>
					<p>Para todos</p>
				</HeroTextContainer>
				<HeroButtonStyled
					onClick={() => {
						navigate('/products');
					}}>
					Compra
				</HeroButtonStyled>
			</HeroLeftStyled>
			<HeroRight>
				<img
					src={"../src/assets/img/hero_image.png"}
					alt=""
				/>
			</HeroRight>
		</HeroContainer>
	);
};

export default Hero;
