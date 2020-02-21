import React from 'react';
import { Route, Redirect } from 'react-router-dom';
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
          <Redirect to={{ pathname: routes.TIME_LINE, state: { from: props.location } }} /> 
        ) : (
          withPublicTemplate(<Component { ...props} />)
        )
      )} 
    />
  )
}

export default PublicRoute;
