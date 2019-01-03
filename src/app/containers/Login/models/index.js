import { Record } from 'immutable';

export const UserModel = Record({
  userid: -1,
  username: '',
  token: '',
  logged: false
});

export const setInitialState = initialState => {
  // eslint-disable-next-line no-param-reassign
  initialState.Main = new UserModel();
  return initialState;
};
