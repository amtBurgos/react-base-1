import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import I18nStore from 'base/i18n';

import * as Actions from './actions';
import * as api from './api';
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
    api.getTranslations().then(() => this.setState({ isReady: true }));
  }

  setLanguage = event => {
    const { lang } = event.target.dataset;
    I18nStore.setLang(lang);
    this.actions.setLanguage(lang);
  };

  render() {
    const { children } = this.props;
    if (!this.state.isReady) return <div>Loading ...</div>;

    console.log('App render');

    return (
      <>
        <header>
          <button data-lang={ 'es-ES' } onClick={ this.setLanguage }>
            ES
          </button>
          <button data-lang={ 'en-US' } onClick={ this.setLanguage }>
            EN
          </button>
        </header>
        <main>{children}</main>
      </>
    );
  }
}

export default connect(null)(App);
