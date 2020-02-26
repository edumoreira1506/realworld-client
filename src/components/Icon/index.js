import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './index.scss';

const Icon = ({
  icon
}) => (
  <FontAwesomeIcon
    icon={icon}
    className="Icon"
  />
);

export default Icon;
