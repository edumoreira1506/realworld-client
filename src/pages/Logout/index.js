import React, { useEffect } from 'react';
import * as User from '../../models/User';

const Logout = () => {
  useEffect(() => {
    User.logout();
  });

  return (
    <h1>
      Logout
    </h1>
  );
}

export default Logout;
