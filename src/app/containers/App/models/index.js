export const AppModel = {
  language: 'es-ES'
};

export const setInitialState = (initialState = {}) => ({
  ...AppModel,
  ...initialState
});
