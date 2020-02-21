import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import App from '../../components/App';

const Routes = () => (
  <HashRouter>
    <Route exact path='/' component={App} />
  </HashRouter>
);

export default Routes
