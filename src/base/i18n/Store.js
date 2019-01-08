let instance;

class I18nStore {
  constructor() {
    if (instance) return instance;

    instance = this;
  }

  saveTranslations(translations) {
    this.translations = translations;
  }
}

export default new I18nStore();
