import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavLinkStyled = styled(NavLink)`
	color: white;
	width: 45px;
	height: 25px;
	&.active {
		color: steelblue;
	}
	& svg {
		width: 100%;
		height: 100%;
	}
`;
