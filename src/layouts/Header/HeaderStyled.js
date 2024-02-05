import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const NavLinkStyled = styled(NavLink)`
  color: white;
  &.active {
    color: steelblue;
  }
`;
