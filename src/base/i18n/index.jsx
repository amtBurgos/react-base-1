import React from 'react';
import memoize from 'memoize-one';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getProperty } from 'base/shared/utils';

import I18nStore from './Store';

export const i18n = (ComponentToTranslate, globalNamespace = 'commons') => {
  const propTypes = {
    lang: PropTypes.string
  };

  // prettier-ignore
  const translate = memoize(
    (translations, lang, text, namespace = globalNamespace) => (
      getProperty(translations, namespace, text, lang) || text
    )
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
