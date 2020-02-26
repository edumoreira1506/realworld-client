import React from 'react';

import './index.scss';

const TextArea = ({
  name,
  onChange,
  required,
  placeholder,
  value
}) => (
  <textarea
    name={name}
    onChange={onChange}
    required={required}
    placeholder={placeholder}
    value={value}
    className="TextArea"
  />
);

export default TextArea;
