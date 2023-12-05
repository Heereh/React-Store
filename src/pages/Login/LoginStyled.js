import styled from 'styled-components';

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: black;
  padding: 20px;
  gap: 20px;
  border-radius: 10px;
  max-width: 500px;
  width: 100%;
  cursor: default;

  & h2 {
    color: white;
    font-size: 2.2rem;
    margin: 12px 0;
    flex-direction: column;
  }

  & Button {
    font-size: 1.6rem;
    padding: 25px;
    margin: 0 0 20px 0;
  }
`;

export const InputContainerStyled = styled.div`
  max-width: 300px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;

  & label {
    color: white;
    font-size: 1.2rem;
    line-height: 40px;
  }

  & input {
    padding: 10px;
    width: 100%;
    border: none;
    outline: none;
    background: #282c34;
    color: #fff;
  }
`;
