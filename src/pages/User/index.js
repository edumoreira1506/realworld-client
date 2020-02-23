import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Container from '../../components/Container';
import Banner from '../../components/Banner';
import Button from '../../components/Button';
import * as Alert from '../../helpers/alert';
import { find, follow } from '../../models/User';
import { useParams } from 'react-router-dom';

import './index.scss';

const User = () => {
  const [ user, setUser ] = useState({});
  const { username } = useParams();

  useEffect(() => {
    find(username, {
      onError: Alert.error,
      onFound: setUser
    });
  }, [username]);

  const followUser = () => {
    follow(user.id, {
      onFollowed: Alert.success,
      onError: Alert.error
    });
  }

  return (
    <div className="User">
      <section className="User__header">
        <Header />
      </section>
      <Banner>
        <Container>
          <div className="User__banner">
            <>
              <div className="User__left-area">
                <figure className="User__image-container">
                  <img className="User__image" src={user.image} alt={user.username} />
                </figure>
                <h2 className="User__name">
                  { user.username }
                </h2>
              </div>
            </>
            <>
              <p className="User__bio">
                { user.bio || 'Nothing here...' }
              </p>
            </>
            <span className="User__follow-button">
              <Button onClick={followUser} type="button">
                Follow +
              </Button>
            </span>
          </div>
        </Container>
      </Banner>
    </div>
  );
}

export default User;
