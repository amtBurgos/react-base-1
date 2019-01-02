export const createReducer = (actionHandler, initialState) => (state = initialState, action) => {
  const handler = actionHandler[action.type];
  if (!handler) return state;
  // eslint-disable-next-line no-param-reassign
  state = handler(state, action);
  return state;
};
