import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from 'containers/Dashboard';
import Login from 'containers/Login';
import App from 'containers/App';
import User from 'containers/User';
import CreateUser from 'containers/User/components/createUser';
import NotFound from 'containers/NotFound';

import PrivateRoute from './PrivateRoute';
import ROUTES from './routes';

const Routes = () => (
  <App>
    <Switch>
      <Route exact={ true } path={ ROUTES.PUBLIC.ROOT } component={ Login } />
      <PrivateRoute path={ ROUTES.PRIVATE.DASHBOARD } component={ Dashboard } />
      <PrivateRoute path={ ROUTES.PRIVATE.USERS.CREATE } component={ CreateUser } />
      <PrivateRoute path={ ROUTES.PRIVATE.USERS.ROOT } component={ User } />
      <Route component={ NotFound } />
    </Switch>
  </App>
);

export { ROUTES };
export default Routes;
