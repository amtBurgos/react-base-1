import fetch from 'isomorphic-fetch';
import { i18n } from 'base/conf/site';
import { adaptor } from 'base/shared/translations';

export const getTranslations = () => fetch(i18n.URL)
  .then(req => req.json())
  .then(translations => adaptor(translations));
