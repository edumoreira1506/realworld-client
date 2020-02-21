import React from 'react';
import { HashRouter } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

import Login from '../../pages/Login';
import TimeLine from '../../pages/TimeLine';

const Routes = () => (
  <HashRouter>
    <PrivateRoute exact path='/time_line' component={TimeLine} />
    
    <PublicRoute exact path='/login' component={Login} />
    <PublicRoute exact path='/' component={Login} />
  </HashRouter>
);

export default Routes
