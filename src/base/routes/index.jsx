import React from 'react';
import { Route } from 'react-router-dom';
import Main from 'containers/Main';
import App from 'containers/App';

const Routes = () => (
  <Route
    path="/"
    component={ props => (
      <App { ...props }>
        <Route exact={ true } path="/" component={ Main } />
      </App>
    ) }
  />
);

export default Routes;
