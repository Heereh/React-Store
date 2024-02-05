import { Link } from 'react-router-dom';
import {
  FooterContainerStyled,
  LinksFooterContainerStyled,
} from './FooterStyled';

const FooterStyled = () => {
  return (
    <FooterContainerStyled>
      <LinksFooterContainerStyled>
        <Link href="#"> Privacidad</Link>
        <Link href="#"> Contacto</Link>
        <Link href="#"> Atención al cliente</Link>
      </LinksFooterContainerStyled>
    </FooterContainerStyled>
  );
};

export default FooterStyled;
