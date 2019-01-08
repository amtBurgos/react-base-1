import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export const i18n = (ComponentToTranslate, defaultNamespace = 'commons') => {
  const propTypes = {
    lang: PropTypes.string,
    translations: PropTypes.object
  };

  const ComponentWithTranslations = ({ lang, translations, ...props }) => (
    <ComponentToTranslate
      { ...props }
      __={ (text, namespace = defaultNamespace) => (translations
          && (translations[namespace]
            && translations[namespace][text]
            && translations[namespace][text][lang]))
        || text
      }
    />
  );

  ComponentWithTranslations.propTypes = propTypes;

  return connect(state => ({
    lang: state.App.lang,
    translations: state.App.translations
  }))(ComponentWithTranslations);
};
