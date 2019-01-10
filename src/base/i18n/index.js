import { getProperty } from 'base/shared/utils';

let instance;

class I18nStore {
  constructor() {
    if (instance) return instance;

    this.language = navigator.language;
    instance = this;
  }

  saveTranslations = translations => {
    this.translations = translations;
  };

  setLanguage = language => {
    this.language = language;
  };

  translate = (text, namespace = 'commons') => getProperty(this.translations, namespace, text, this.language) || text;
}

export const { translate } = new I18nStore();
export default new I18nStore();
