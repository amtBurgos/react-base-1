import { createReducer } from 'base';
import { UserModel } from '../models';
import ActionTypes from '../actionTypes';

const loginRequest = state => state;
const loginError = state => state;
const loginSuccess = (state, { payload }) => state
  .set('userid', payload.userid)
  .set('username', payload.username)
  .set('token', payload.token)
  .set('logged', true);

const logoutRequest = state => state;
const logoutError = state => state;
const logoutSuccess = state => state
  .set('userid', 0)
  .set('username', '')
  .set('token', '')
  .set('logged', false);

const actionHandlers = {
  [ActionTypes.LOGIN_REQUEST]: loginRequest,
  [ActionTypes.LOGIN_ERROR]: loginError,
  [ActionTypes.LOGIN_SUCCESS]: loginSuccess,
  [ActionTypes.LOGOUT_REQUEST]: logoutRequest,
  [ActionTypes.LOGOUT_ERROR]: logoutError,
  [ActionTypes.LOGOUT_SUCCESS]: logoutSuccess
};

export default createReducer(actionHandlers, new UserModel());
