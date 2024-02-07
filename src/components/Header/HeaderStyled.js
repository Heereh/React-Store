import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavLinkStyled = styled(NavLink)`
	color: white;
	width: 45px;
	height: 25px;

	&.active {
		color: ${(props) => (props.title ? 'white' : 'steelblue')};
	}

	& svg {
		width: 100%;
		height: 100%;
	}
`;
