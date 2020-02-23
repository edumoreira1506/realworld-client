import React from 'react';
import Header from '../../components/Header';
import { routes } from '../../config/constants';

import './index.scss';

const headerLinks = [
  {
    content: 'Edit',
    to: routes.EDIT
  },
  {
    content: 'Logout',
    to: routes.LOGOUT
  }
];

const PrivateTemplate = ({ children }) => (
  <div className="PrivateTemplate">
    <section className="PrivateTemplate__header">
      <Header links={headerLinks} />
    </section>
    { children }
  </div>
);

export default PrivateTemplate;
