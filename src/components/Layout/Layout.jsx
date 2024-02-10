/* eslint-disable react/prop-types */
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { LayoutContainerStyled, LayoutWrapper } from './LayoutStyled';

const Layout = ({ children }) => {
	return (
		<LayoutContainerStyled>
			<Header />
			<LayoutWrapper>
				{children}
			</LayoutWrapper>
				<Footer></Footer>
		</LayoutContainerStyled>
	);
};

export default Layout;
