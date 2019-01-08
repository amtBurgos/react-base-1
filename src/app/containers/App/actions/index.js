import ActionTypes from '../actionTypes';
import * as api from '../api';

export const setLanguage = lang => ({
  type: ActionTypes.SET_LANGUAGE,
  payload: lang
});

export const getTranslations = () => ({
  type: ActionTypes.I18N_REQUEST,
  request: api.getTranslations()
});
