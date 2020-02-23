import React from 'react';
import Header from '../../components/Header';

import './index.scss';

const PublicTemplate = ({ children }) => (
  <div className="PublicTemplate">
    <section className="PublicTemplate__header">
      <Header />
    </section>
    { children }
  </div>
);

export default PublicTemplate;
