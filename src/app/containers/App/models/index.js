export const AppModel = {
  lang: 'es'
};

export const setInitialState = (initialState = {}) => ({
  ...AppModel,
  ...initialState
});
