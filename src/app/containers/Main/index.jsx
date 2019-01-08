import React, { Component } from 'react';
import Immutable from 'immutable';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { i18n } from 'base/i18n';

import Actions from './actions';
import Logo from '../../components/Logo';
import styles from './styles';

const propTypes = {
  dispatch: PropTypes.func.isRequired,
  MainModel: PropTypes.instanceOf(Immutable.Record).isRequired,
  __: PropTypes.func.isRequired
};

class Main extends Component {
  constructor(props) {
    super(props);
    this.actions = bindActionCreators(Actions, props.dispatch);
  }

  componentDidMount() {
    return this.props.MainModel.name || this.actions.getLogo();
  }

  render() {
    const { MainModel, __ } = this.props;

    return (
      <div className={ styles.Main }>
        <div>
          <Logo alt={ MainModel.alt } width={ MainModel.width } src={ MainModel.src } />

          <div>
            <div className={ styles.txt }>{__('EXAMPLES')}</div>

            <div className={ styles.txt }>{__('CONTENT')}</div>
          </div>
        </div>
      </div>
    );
  }
}

Main.propTypes = propTypes;

export default i18n(connect(state => ({ MainModel: state.Main }))(Main));
