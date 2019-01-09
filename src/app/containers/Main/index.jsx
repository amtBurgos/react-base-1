import React, { Component } from 'react';
import Immutable from 'immutable';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

import Logo from 'components/Logo';

import Table from 'components/Table';
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
          <Table
            columns={ [
              { label: 'column1', value: 'c1' },
              { label: 'column2', value: 'c2' },
              { label: 'column3', value: 'c3' }
            ] }
            data={ [{ c1: 'value1', c2: 'value2', c3: 'value3' }] }
          />
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
