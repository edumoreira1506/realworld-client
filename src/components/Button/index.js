import React from 'react';

import './index.scss';

const Button = ({
  type,
  onClick,
  children
}) => (
  <button type={type} onClick={onClick} className="Button">
    { children }
  </button>
);

export default Button;
