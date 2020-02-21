import React from 'react';
import Header from '../../components/Header';

import './index.scss';

const headerLinks = [
  {
    content: 'Register',
    to: '/register'
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