import React from 'react';

import './index.scss';

const Link = ({ children, to, target = '_blank' }) => (
  <a href={to} target={target} className="Link">
    { children }
  </a>
);

export default Link;
