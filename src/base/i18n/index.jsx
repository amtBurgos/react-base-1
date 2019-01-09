import React from 'react';
import memoize from 'memoize-one';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import I18nStore from './Store';

export const i18n = (ComponentToTranslate, myNamespace = 'commons') => {
  const propTypes = {
    lang: PropTypes.string
  };

  const translate = memoize(
    (translations, lang, text, namespace = myNamespace) => (translations
        && (translations[namespace]
          && translations[namespace][text]
          && translations[namespace][text][lang]))
      || text
  );

  const ComponentWithTranslations = ({ lang, ...props }) => (
    <ComponentToTranslate
      { ...props }
      __={ (text, namespace) => translate(I18nStore.translations, lang, text, namespace) }
    />
  );

  ComponentWithTranslations.propTypes = propTypes;

  return connect(state => ({
    lang: state.App.lang
  }))(ComponentWithTranslations);
};
