import React from 'react';
import PublicTemplate from '../templates/PublicTemplate';
import PrivateTemplate from '../templates/PrivateTemplate';

export const withPublicTemplate = element => (
  <PublicTemplate>
    { element }
  </PublicTemplate>
);

export const withPrivateTemplate = element => (
  <PrivateTemplate>
    { element }
  </PrivateTemplate>
);
