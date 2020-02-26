import React, { useState, useEffect } from 'react';
import Form from '../../components/Form';
import Box from '../../components/Box';
import Link from '../../components/Link';
import * as User from '../../models/User';
import * as Alert from '../../helpers/alert';
import { routes } from '../../config/constants';

import './index.scss';

const EditProfile = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState('');
  const [bio, setBio] = useState('');

  useEffect(() => {
    const userId = User.getId();

    User.find(userId, {
      onError: Alert.error,
      onFound: user => {
        setUsername(user.username);
        setEmail(user.email);
        setImage(user.image);
        setBio(user.bio);
      }
    })
  }, []);

  const onSubmit = e => {
    e.preventDefault();

    const user = {
      username,
      email,
      image,
      bio
    };

    User.edit(user, {
      onError: Alert.error,
      onEdited: () => Alert.success('Edited!')
    });
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
      type: 'text',
      onChange: e => setUsername(e.target.value),
      required: true,
      placeholder: 'Username',
      value: username
    },
    {
      type: 'text',
      onChange: e => setImage(e.target.value),
      required: false,
      placeholder: 'Url image',
      value: image
    }
  ];

  const textAreas = [
    {
      onChange: e => setBio(e.target.value),
      required: true,
      placeholder: 'Bio',
      value: bio
    }
  ];

  return (
    <Box>
      <div className="EditProfile">
        <h2 className="EditProfile__title">
          Edit Profile
        </h2>
        <h3 className="EditProfile__edit-password">
          <Link to={routes.EDIT_PASSWORD} target="_self">
            Edit password
          </Link>
        </h3>
        <div className="EditProfile__areas">
          <Form
            onSubmit={onSubmit}
            buttonText="EditP rofile"
            inputs={inputs}
            textAreas={textAreas}
          />
          <figure className="EditProfile__image-container">
            <img src={image} className="EditProfile__image" alt={username} />
          </figure>
        </div>
      </div>
    </Box>
  );
};

export default EditProfile;
