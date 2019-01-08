export const AppModel = {
  lang: 'es',
  translations: {}
};

export const setInitialState = (initialState = {}) => ({
  ...AppModel,
  ...initialState
});
