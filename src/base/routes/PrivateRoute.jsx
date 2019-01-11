import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import ROUTES from './routes';

const propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
};

const PrivateRoute = ({ isAuthenticated, ...props }) => {
  let component;
  if (isAuthenticated) {
    component = <Route { ...props } />;
  } else {
    console.log('Not Authenticated --> Redirecting to login');
    component = <Redirect to={ ROUTES.PUBLIC.ROOT } />;
  }
  return component;
};

PrivateRoute.propTypes = propTypes;

const mapStateToProps = state => ({ isAuthenticated: state.Session.get('isAuthenticated') });
export default connect(mapStateToProps)(PrivateRoute);
