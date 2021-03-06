import React from 'react';
import { Route } from 'react-router-dom';
import { isAuthenticated, redirectTo } from '../../models/User';
import { routes } from '../constants';
import { withPrivateTemplate } from '../../helpers/template';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const authenticated = isAuthenticated();

  return (
    <Route 
      { ...rest }
      render={props => (
        authenticated ? (
          withPrivateTemplate(<Component { ...props} />)
        ) : (
          redirectTo(routes.LOGIN)
        )
      )} 
    />
  )
}

export default PrivateRoute;
