import React from 'react';
import Link from '../Link';
import Container from '../Container';

import './index.scss';

const Header = ({ links }) => (
  <header className="Header">
    <Container>
      <div className="Header__areas">
        <div className="Header__logo">
          <h1 className="Header__title">RealWorld</h1>
        </div>
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
