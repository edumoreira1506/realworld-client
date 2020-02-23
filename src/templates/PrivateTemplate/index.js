import React from 'react';
import Header from '../../components/Header';

import './index.scss';

const PrivateTemplate = ({ children }) => (
  <div className="PrivateTemplate">
    <section className="PrivateTemplate__header">
      <Header />
    </section>
    { children }
  </div>
);

export default PrivateTemplate;
