import React from 'react';
import { FormStyled, InputContainerStyled } from '../Login/LoginStyled';
import { Button } from '@nextui-org/react';
const Register = () => {
  return (
    <FormStyled>
      <h2>Register</h2>
      <InputContainerStyled>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" />
      </InputContainerStyled>
      <InputContainerStyled>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />
      </InputContainerStyled>
      <InputContainerStyled>
        <label htmlFor="password-check">Password</label>
        <input type="password" id="password-check" name="password" />
      </InputContainerStyled>
      <InputContainerStyled>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />
      </InputContainerStyled>
      <Button variant="ghost" color="primary">
        Login
      </Button>
    </FormStyled>
  );
};

export default Register;
