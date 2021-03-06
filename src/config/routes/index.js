import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

import Login from '../../pages/Login';
import TimeLine from '../../pages/TimeLine';
import Register from '../../pages/Register';
import EditProfile from '../../pages/EditProfile';
import EditPassword from '../../pages/EditPassword';
import Logout from '../../pages/Logout';
import User from '../../pages/User';
import Post from '../../pages/Post';
import NotFound from '../../pages/NotFound';
import SearchUsers from '../../pages/SearchUsers';

const Routes = () => (
  <HashRouter>
    <Switch>
      <PrivateRoute exact path='/time_line' component={TimeLine} />
      <PrivateRoute exact path='/edit_profile' component={EditProfile} />
      <PrivateRoute exact path='/edit_password' component={EditPassword} />
      <PrivateRoute exact path='/logout' component={Logout} />

      <PublicRoute exact path='/login' component={Login} />
      <PublicRoute exact path='/' component={Login} />
      <PublicRoute exact path='/register' component={Register} />

      <Route exact path="/user/:username" component={User} />
      <Route exact path="/post/:postId" component={Post} />
      <Route exact path="/search_users" component={SearchUsers} />
      <Route component={NotFound} />
    </Switch>
  </HashRouter>
);

export default Routes
