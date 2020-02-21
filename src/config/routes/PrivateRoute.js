import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from '../../models/User';
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
          <Redirect to={{ pathname: routes.LOGIN, state: { from: props.location } }} /> 
        )
      )} 
    />
  )
}

export default PrivateRoute;
