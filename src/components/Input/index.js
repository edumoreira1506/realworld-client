import React from 'react';

import './index.scss';

const Input = ({
  name,
  type,
  onChange,
  required,
  placeholder,
  value
}) => (
  <input
    name={name}
    onChange={onChange}
    type={type}
    required={required}
    placeholder={placeholder}
    value={value}
    className="Input"
  />
);

export default Input;
