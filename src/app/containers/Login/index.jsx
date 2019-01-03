import React, { Component } from 'react';
import Immutable from 'immutable';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

import { ROUTES } from 'base/routes';
import Actions from './actions';
import styles from './styles';

const propTypes = {
  dispatch: PropTypes.func.isRequired,
  UserModel: PropTypes.instanceOf(Immutable.Record).isRequired
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.actions = bindActionCreators(Actions, props.dispatch);
    this.onGoToMain = this.onGoToMain.bind(this);
    this.onLogout = this.onLogout.bind(this);
    this.onLogin = this.onLogin.bind(this);
  }

  onGoToMain() {
    this.actions.push(ROUTES.PRIVATE.MAIN);
  }

  onLogout() {
    this.actions.logoutRequest();
  }

  onLogin() {
    this.actions.loginRequest('FakeUser', 'FakePassword').then(({ type }) => {
      if (type === 'LOGIN_SUCCESS') this.onGoToMain();
    });
  }

  render() {
    return (
      <div className={ styles.Main }>
        <div>
          <div>
            <div className={ styles.txt }>Login Page</div>
          </div>
          <div>
            <button type="button" onClick={ this.onGoToMain }>
              Go to second page
            </button>
            <button type="button" onClick={ this.onLogout }>
              Log Out
            </button>
            <button type="button" onClick={ this.onLogin }>
              Log In
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = propTypes;

export default connect(state => ({ UserModel: state.User }))(Login);
