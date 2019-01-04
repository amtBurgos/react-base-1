import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import ROUTES from './routes';

const propTypes = {
  logged: PropTypes.bool.isRequired,
  routeProps: PropTypes.object.isRequired
};

const PrivateRoute = ({ logged, routeProps }) => {
  let component;
  if (logged) {
    component = <Route { ...routeProps } />;
  } else {
    component = <Redirect from={ ROUTES.PUBLIC.ROOT } to={ routeProps.path } />;
  }
  return component;
};

PrivateRoute.propTypes = propTypes;

const mapStateToProps = (state, routeProps) => ({ logged: state.User.get('logged'), routeProps });
export default connect(mapStateToProps)(PrivateRoute);
