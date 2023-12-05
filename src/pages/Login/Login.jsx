import { useState } from 'react';
import { FormStyled, InputContainerStyled } from './LoginStyled';
import { Button } from '@nextui-org/react';

const initialValues = {
  username: '',
  password: '',
};

const Login = () => {
  const [form, setForm] = useState(initialValues);
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
          onChange={''}
        />
      </InputContainerStyled>
      <InputContainerStyled>
        <label>Password</label>
        <input type="password" id="password" name="password" onChange={''} />
      </InputContainerStyled>
      <Button variant="ghost" color="primary">
        Login
      </Button>
    </FormStyled>
  );
};

export default Login;
