import React from 'react';

import './index.scss';

const Button = ({
  type = 'button',
  onClick,
  children
}) => (
  <button
    type={type}
    data-testid="button"
    onClick={onClick}
    className="Button"
  >
    { children }
  </button>
);

export default Button;
