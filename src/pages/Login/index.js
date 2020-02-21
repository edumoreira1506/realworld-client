import React, { useState } from 'react';
import Box from '../../components/Box';
import Link from '../../components/Link';
import Form from '../../components/Form';
import { routes } from '../../config/constants';

import * as User from '../../models/User';
import * as Alert from '../../helpers/alert';

import './index.scss'

const Login = () => {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const onSubmit = e => {
    e.preventDefault();

    User.login(email, password, {
      onAuthenticated: User.authenticate,
      onError: Alert.error
    });
  }

  const inputs = [
    {
      name: 'email',
      type: 'email',
      onChange: e => setEmail(e.target.value),
      required: true,
      placeholder: 'E-mail',
      value: email
    },
    {
      name: 'password',
      type: 'password',
      onChange: e => setPassword(e.target.value),
      required: true,
      placeholder: 'Password',
      value: password
    },
  ]

  return (
    <Box>
      <div className="Login">
        <h2 className="Login__title">
          Login
        </h2>
        <h3 className="Login__register-link">
          <Link to={routes.REGISTER} target="_self">
            Need an account?
          </Link>
        </h3>
        <div className="Login__form">
          <Form
            onSubmit={onSubmit}
            buttonText="Sign in"
            inputs={inputs}
          />
        </div>
      </div>
    </Box>
  );
}

export default Login;
