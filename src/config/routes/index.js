import React from 'react';
import { HashRouter } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

import Login from '../../pages/Login';
import TimeLine from '../../pages/TimeLine';
import Register from '../../pages/Register';
import EditProfile from '../../pages/EditProfile';
import EditPassword from '../../pages/EditPassword';

const Routes = () => (
  <HashRouter>
    <PrivateRoute exact path='/time_line' component={TimeLine} />
    <PrivateRoute exact path='/edit_profile' component={EditProfile} />
    <PrivateRoute exact path='/edit_password' component={EditPassword} />
    
    <PublicRoute exact path='/login' component={Login} />
    <PublicRoute exact path='/' component={Login} />
    <PublicRoute exact path='/register' component={Register} />
  </HashRouter>
);

export default Routes
