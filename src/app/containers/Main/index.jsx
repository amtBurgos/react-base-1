import React, { Component } from 'react';
import Immutable from 'immutable';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

import Logo from 'components/Logo';

import Actions from './actions';
import styles from './styles';

const propTypes = {
  dispatch: PropTypes.func.isRequired,
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

  render() {
    const LogoData = this.props.MainModel;

    return (
      <div className={ styles.Main }>
        <div>
          <Logo alt={ LogoData.alt } width={ LogoData.width } src={ LogoData.src } />

          <div>
            <div className={ styles.txt }>Examples</div>
          </div>
        </div>
      </div>
    );
  }
}

Main.propTypes = propTypes;

export default connect(state => ({ MainModel: state.Main }))(Main);
