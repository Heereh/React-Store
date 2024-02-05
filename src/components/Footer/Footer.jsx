import { Link } from 'react-router-dom';
import {
	FooterColumnOne,
	FooterColumnThree,
	FooterColumnTwo,
	FooterContainerStyled,
	LinksFooterContainerStyled,
} from './FooterStyled';

import { FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
	return (
		<FooterContainerStyled id="Footer">
			<LinksFooterContainerStyled>
				<FooterColumnOne>
					<h2>ForLOOK</h2>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non
						numquam assumenda fugiat qui ducimus accusamus vitae atque
					</p>
					<ul>
						<li>
							<Link href="">
								<FaInstagram />
							</Link>
							<Link href="">
								<FaLinkedin />
							</Link>
						</li>
					</ul>
				</FooterColumnOne>

				<FooterColumnTwo>
					<h2>Servicios Customizados</h2>
					<ul>
						<li>Contactanos</li>
						<li>Sigue tu orden</li>
						<li>Reparos</li>
						<li>Compras y devolución</li>
					</ul>
				</FooterColumnTwo>

				<FooterColumnThree>
					<h2>SOBRE NOSOTROS</h2>
					<ul>
						<li>Nuestros producos</li>
						<li>FAQ</li>
						<li>Sobre nosotros</li>
						<li>Terminos y Condiciones</li>
					</ul>
				</FooterColumnThree>
			</LinksFooterContainerStyled>
		</FooterContainerStyled>
	);
};

export default Footer;
