import React, { Component } from 'react';
import Immutable from 'immutable';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { txt } from 'base/i18n';
import { ROUTES } from 'base/routes';

import Logo from 'components/Logo';

import Actions from './actions';
import styles from './styles';

const propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.object,
  MainModel: PropTypes.instanceOf(Immutable.Record).isRequired
};

class Main extends Component {
  constructor(props) {
    super(props);
    this.actions = bindActionCreators(Actions, props.dispatch);
  }

  componentDidMount() {
    return this.props.MainModel.name || this.actions.getLogo();
  }

  goToLogin = () => {
    this.props.history.push(ROUTES.PUBLIC.ROOT);
  };

  logout = () => {
    this.actions.logoutRequest();
  };

  componentWillUnmount() {
    console.log('unmounted!!');
  }

  render() {
    const { MainModel } = this.props;

    console.log('Main render');
    return (
      <div className={ styles.Main }>
        <div>
          <Logo alt={ MainModel.alt } width={ MainModel.width } src={ MainModel.src } />

          <div>
            <div className={ styles.txt }>{txt('EXAMPLES')}</div>

            <div className={ styles.txt }>{txt('CONTENT')}</div>
          </div>
          <div>
            <button type="button" onClick={ this.goToLogin }>
              Go to login page
            </button>
            <button type="button" onClick={ this.logout }>
              Log Out
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Main.propTypes = propTypes;

export default connect(state => ({ MainModel: state.Main, lang: state.App.lang }))(Main);
