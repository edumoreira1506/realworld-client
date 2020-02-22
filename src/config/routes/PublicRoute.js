import React from 'react';
import { Route } from 'react-router-dom';
import { isAuthenticated } from '../../models/User';
import { routes } from '../constants';
import { withPublicTemplate } from '../../helpers/template';

const PublicRoute = ({ component: Component, ...rest }) => {
  const authenticated = isAuthenticated();

  return (
    <Route 
      { ...rest } 
      render={props => (
        authenticated ? (
          window.location = routes.TIME_LINE
        ) : (
          withPublicTemplate(<Component { ...props} />)
        )
      )} 
    />
  )
}

export default PublicRoute;
