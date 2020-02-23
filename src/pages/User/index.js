import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Container from '../../components/Container';
import * as Alert from '../../helpers/alert';
import { find } from '../../models/User';
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

  return (
    <div className="User">
      <section className="User__header">
        <Header />
      </section>
      <Container>
        { username }
      </Container>
    </div>
  );
}

export default User;
