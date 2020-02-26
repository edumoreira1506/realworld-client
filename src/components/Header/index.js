import React from 'react';
import Link from '../Link';
import Container from '../Container';
import * as User from '../../models/User';
import { privateLinks, publicLinks, baseUrl } from '../../config/constants';

import './index.scss';

const links = User.isAuthenticated() ? privateLinks : publicLinks;

const Header = () => (
  <header className="Header">
    <Container>
      <div className="Header__areas">
        <Link to={baseUrl} target="_self">
          <div className="Header__logo">
            <h1 className="Header__title">RealWorld</h1>
          </div>
        </Link>
        <nav className="Header__links">
          {
            links.map(link =>
              <Link to={link.to} key={link.to} target="_self">
                { link.content }
              </Link>
            )
          }
        </nav>
      </div>
    </Container>
  </header>
);

export default Header;
