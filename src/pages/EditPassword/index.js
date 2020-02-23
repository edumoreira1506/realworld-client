import React, { useState } from 'react';
import Box from '../../components/Box';
import Form from '../../components/Form';
import * as User from '../../models/User';
import * as Alert from '../../helpers/alert';

import './index.scss'

const EditPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const onSubmit = e => {
    e.preventDefault();

    const user = {
      password,
      confirmPassword
    };

    User.edit(user, {
      onError: Alert.error,
      onEdited: () => {
        setPassword('');
        setConfirmPassword('');

        Alert.success('Edited!')
      }
    });
  }

  const inputs = [
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
      placeholder: 'Confirm password',
      value: confirmPassword
    }
  ]

  return (
    <Box>
      <div className="EditPassword">
        <h2 className="EditPassword__title">
          Password
        </h2>
        <div className="EditPassword__form">
          <Form
            onSubmit={onSubmit}
            buttonText="Edit"
            inputs={inputs}
          />
        </div>
      </div>
    </Box>
  );
}

export default EditPassword;
