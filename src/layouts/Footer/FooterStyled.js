import styled from 'styled-components';
export const FooterContainerStyled = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 7rem 0 2rem 0;
  width: 100%;
  background-color: black;
  margin-top: 200px;
  bottom: 0;
`;

export const LinksFooterContainerStyled = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  width: 30%;

  & a {
    color: #fff;
  }
`;
