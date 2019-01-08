import { createReducer } from 'base';
import ActionTypes from '../actionTypes';
import { AppModel } from '../models';

const setLanguage = (state, { payload }) => ({
  ...state,
  lang: payload
});

const i18nRequest = state => state;
const i18nSuccess = (state, { payload }) => ({
  ...state,
  translations: payload
});
const i18nError = state => ({
  ...state,
  translations: {
    commons: {
      EXAMPLES: {
        es: 'Ejemplos',
        en: 'Examples'
      }
    }
  }
});

const actionHandlers = {
  [ActionTypes.SET_LANGUAGE]: setLanguage,
  [ActionTypes.I18N_REQUEST]: i18nRequest,
  [ActionTypes.I18N_SUCCESS]: i18nSuccess,
  [ActionTypes.I18N_ERROR]: i18nError
};

export default createReducer(actionHandlers, AppModel);
