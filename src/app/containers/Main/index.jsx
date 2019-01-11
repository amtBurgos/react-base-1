import React, { Component } from 'react';
import Immutable from 'immutable';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

import { ROUTES } from 'base/routes';
import Actions from './actions';
import Logo from '../../components/Logo';
import styles from './styles';

const propTypes = {
  dispatch: PropTypes.func.isRequired,
  MainModel: PropTypes.instanceOf(Immutable.Record).isRequired
};

class Main extends Component {
  constructor(props) {
    super(props);
    this.actions = bindActionCreators(Actions, props.dispatch);
    this.onGoToLogin = this.onGoToLogin.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }

  componentDidMount() {
    return this.props.MainModel.name || this.actions.getLogo();
  }

  onGoToLogin() {
    this.actions.push(ROUTES.PUBLIC.ROOT);
  }

  onLogout() {
    this.actions.logoutRequest().then(({ type }) => {
      if (type === 'LOGOUT_SUCCESS') this.onGoToLogin();
    });
  }

  componentWillUnmount() {
    console.log('unmounted!!');
  }

  render() {
    const LogoData = this.props.MainModel;

    return (
      <div className={ styles.Main }>
        <div>
          <Logo alt={ LogoData.alt } width={ LogoData.width } src={ LogoData.src } />
          <div>
            <div className={ styles.txt }>Examples</div>
          </div>
          <div>
            <button type="button" onClick={ this.onGoToLogin }>
              Go to login page
            </button>
            <button type="button" onClick={ this.onLogout }>
              Log Out
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Main.propTypes = propTypes;

export default connect(state => ({ MainModel: state.Main }))(Main);
