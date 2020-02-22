import React from 'react';
import { HashRouter } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

import Login from '../../pages/Login';
import TimeLine from '../../pages/TimeLine';
import Register from '../../pages/Register';

const Routes = () => (
  <HashRouter>
    <PrivateRoute exact path='/time_line' component={TimeLine} />
    
    <PublicRoute exact path='/login' component={Login} />
    <PublicRoute exact path='/' component={Login} />
    <PublicRoute exact path='/register' component={Register} />
  </HashRouter>
);

export default Routes
