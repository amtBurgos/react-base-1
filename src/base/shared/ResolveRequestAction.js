import getActionPrefix from './GetActionPrefix';

const resolveRequestAction = (action, response, result) => ({
  type: `${getActionPrefix(action.type)}_${result}`,
  payload: response,
});

export default resolveRequestAction;
