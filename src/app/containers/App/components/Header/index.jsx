import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import I18nStore from 'base/i18n';

import * as Actions from '../../actions';
import styles from './styles';

class Header extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  };

  actions = bindActionCreators(Actions, this.props.dispatch);

  setLanguage = event => {
    const { lang } = event.target.dataset;
    I18nStore.setLang(lang);
    this.actions.setLanguage(lang);
  };

  render() {
    return (
      <header>
        <span>Logo</span>
        <span>Header</span>
        <div className={ styles.langButtons }>
          <button data-lang={ 'es-ES' } onClick={ this.setLanguage }>
            ES
          </button>
          <button data-lang={ 'en-US' } onClick={ this.setLanguage }>
            EN
          </button>
        </div>
      </header>
    );
  }
}

export default connect(null)(Header);
