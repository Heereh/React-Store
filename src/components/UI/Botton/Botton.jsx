import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LinkItem = styled(Link)`
  color: #3da9fc;
  border: 1px solid #3da9fc;
  border-radius: 20px;
  padding: 5px 15px;
  transition: all 0.3s ease;

  :hover {
    background: #3da9fc;
    color: fff;
  }
`;

// eslint-disable-next-line react/prop-types
const Botton = ({ children }) => {
  return <LinkItem to={children}>{children}</LinkItem>;
};

export default Botton;
