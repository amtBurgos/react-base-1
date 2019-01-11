import { Record } from 'immutable';

export const SessionModel = Record({
  isAuthenticated: !!sessionStorage.getItem('token')
});

export const setInitialState = initialState => {
  // eslint-disable-next-line no-param-reassign
  initialState.Session = new SessionModel();
  return initialState;
};
