import { useContext, useEffect } from 'react';
import { FormStyled, InputContainerStyled } from './LoginStyled';
import { Button } from '@nextui-org/react';

import AuthContext from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { handleChange, handleSubmit, form, isAuth } = useContext(AuthContext);
  const navigate = useNavigate()
  useEffect(() => {
    if(isAuth){
      navigate('/')
    }
  },[isAuth, navigate])
  return (
    <FormStyled>
      <h2>Login</h2>
      <InputContainerStyled>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder=""
          id="username"
          name="username"
          onChange={handleChange}
          value={form.username}
        />
      </InputContainerStyled>
      <InputContainerStyled>
        <label>Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={form.password}
          onChange={handleChange}
        />
      </InputContainerStyled>
      <Button variant="ghost" color="primary" onClick={handleSubmit}>
        Login
      </Button>
    </FormStyled>
  );
};

export default Login;
