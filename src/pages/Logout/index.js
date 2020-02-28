import React, { useEffect } from 'react';
import * as User from '../../models/User';

import './index.scss';

const Logout = () => {
  useEffect(() => {
    User.logout();
  });

  return (
    <section className="Logout">
      <h2 className="Logout__sentence">
        We will miss you.
      </h2>
      <figure className="Logout__image-container">
        <img
          src="https://www.pngitem.com/pimgs/m/220-2201131_good-bye-png-image-good-bye-images-png.png"
          alt="good bye"
          className="Logout__image"
        />
      </figure>
    </section>
  );
}

export default Logout;
