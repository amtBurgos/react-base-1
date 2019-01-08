import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as Actions from './actions';
import './styles';

class App extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
    dispatch: PropTypes.func.isRequired
  };

  state = {
    isReady: false
  };

  actions = bindActionCreators(Actions, this.props.dispatch);

  componentDidMount() {
    this.actions.getTranslations();
    // this.setState({ isReady: true });
  }

  setLanguage = event => {
    this.actions.setLanguage(event.target.dataset.lang);
  };

  render() {
    const { children } = this.props;
    return (
      <>
        <header>
          <button data-lang={ 'es' } onClick={ this.setLanguage }>
            ES
          </button>
          <button data-lang={ 'en' } onClick={ this.setLanguage }>
            EN
          </button>
        </header>
        <main>{children}</main>
      </>
    );
  }
}

export default connect(null)(App);
