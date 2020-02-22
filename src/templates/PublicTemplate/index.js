import React from 'react';
import Header from '../../components/Header';
import { routes } from '../../config/constants';

import './index.scss';

const headerLinks = [
  {
    content: 'Register',
    to: routes.REGISTER
  },
  {
    content: 'Login',
    to: routes.LOGIN
  }
];

const PublicTemplate = ({ children }) => (
  <div className="PublicTemplate">
    <section className="PublicTemplate__header">
      <Header links={headerLinks} />
    </section>
    { children }
  </div>
);

export default PublicTemplate;
