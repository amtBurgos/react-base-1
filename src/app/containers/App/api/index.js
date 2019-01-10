import fetch from 'isomorphic-fetch';
import { i18n } from 'base/conf/site';
import { adaptor } from 'base/shared/translations';
import I18nStore from 'base/i18n';

const TRANSLATIONS = {
  commons: {
    EXAMPLES: {
      'es-ES': 'Ejemplos',
      'en-EN': 'Examples'
    }
  }
};

export const getTranslations = () => fetch(i18n.URL)
  .then(req => req.json())
  .then(translations => adaptor(translations))
// it suppose to be "then"
  .catch(() => I18nStore.saveTranslations(TRANSLATIONS));
