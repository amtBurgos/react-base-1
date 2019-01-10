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
    dispatch: PropTypes.func.isRequired,
    language: PropTypes.string.isRequired,
    history: PropTypes.object
  };

  state = {
    isReady: false
  };

  actions = bindActionCreators(Actions, this.props.dispatch);

  componentDidMount() {
    api.getTranslations().finally(() => this.setState({ isReady: true }));
  }

  componentDidUpdate(prevProps) {
    const { language } = this.props;
    if (prevProps.language !== language) {
      I18nStore.setLanguage(language);
      this.props.history.push(`?${language.slice(0, 2)}`);
    }
  }

  setLanguage = event => {
    this.actions.setLanguage(event.target.dataset.lang);
  };

  render() {
    const { children, language } = this.props;
    if (!this.state.isReady) return <div>Loading ...</div>;
    console.log('App render', language);
    return (
      <>
        <header>
          <button data-lang={ 'es-ES' } onClick={ this.setLanguage }>
            ES
          </button>
          <button data-lang={ 'en-EN' } onClick={ this.setLanguage }>
            EN
          </button>
        </header>
        <main>{children}</main>
      </>
    );
  }
}

export default connect(state => ({
  language: state.App.language
}))(App);
