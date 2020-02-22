import React, { useState } from 'react';
import Box from '../../components/Box';
import Form from '../../components/Form';
import * as User from '../../models/User';
import * as Alert from '../../helpers/alert';

import './index.scss';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [urlImage, setUrlImage] = useState('');

  const onSubmit = e => {
    e.preventDefault();

    const user = {
      username,
      email,
      password,
      confirmPassword,
      urlImage
    };

    User.register(user, {
      onError: Alert.error,
      onRegistered: () => {
        setUsername('')
        setEmail('')
        setPassword('')
        setConfirmPassword('')
        setUrlImage('')

        Alert.success('Registered!')
      }
    })
  }

  const inputs = [
    {
      type: 'email',
      onChange: e => setEmail(e.target.value),
      required: true,
      placeholder: 'E-mail',
      value: email
    },
    {
      type: 'password',
      onChange: e => setPassword(e.target.value),
      required: true,
      placeholder: 'Password',
      value: password
    },
    {
      type: 'password',
      onChange: e => setConfirmPassword(e.target.value),
      required: true,
      placeholder: 'Confirm Password',
      value: confirmPassword
    },
    {
      type: 'text',
      onChange: e => setUsername(e.target.value),
      required: true,
      placeholder: 'Username',
      value: username
    },
    {
      type: 'text',
      onChange: e => setUrlImage(e.target.value),
      required: false,
      placeholder: 'Url image',
      value: urlImage
    },
  ];

  return (
    <Box>
      <div className="Register">
        <h2 className="Register__title">
          Register
        </h2>
        <div className="Register__form">
          <Form
            onSubmit={onSubmit}
            buttonText="Register"
            inputs={inputs}
          />
        </div>
      </div>
    </Box>
  );
}

export default Register;
