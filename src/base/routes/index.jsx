import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from 'containers/Main';
import Login from 'containers/Login';
import App from 'containers/App';
import NotFound from 'containers/NotFound';

import PrivateRoute from './PrivateRoute';
import ROUTES from './routes';

const Routes = () => (
  <Route
    component={ () => (
      <App>
        <Switch>
          <Route exact={ true } path={ ROUTES.PUBLIC.LOGIN } component={ Login } />
          <PrivateRoute exact={ true } path={ ROUTES.PRIVATE.MAIN } component={ Main } />
          <Route component={ NotFound } />
        </Switch>
      </App>
    ) }
  />
);

export { ROUTES };
export default Routes;
