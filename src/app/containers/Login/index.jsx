import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

import { ROUTES } from 'base/routes';
import Actions from './actions';
import styles from './styles';

class Login extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    history: PropTypes.object
  };

  actions = bindActionCreators(Actions, this.props.dispatch);

  login = () => {
    this.actions.loginRequest('FakeUser', 'FakePassword').then(({ type }) => {
      if (type === 'LOGIN_SUCCESS') this.props.history.push(ROUTES.PRIVATE.DASHBOARD);
    });
  };

  render() {
    return (
      <div className={ styles.Main }>
        <div>
          <div>
            <label>User</label>
            <input placeholder={ 'Write your username' } />
          </div>
          <div>
            <label>Password</label>
            <input type="password" placeholder={ 'Write your password' } />
          </div>
          <div>
            <button type="button" onClick={ this.login }>
              Log In
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null)(Login);
