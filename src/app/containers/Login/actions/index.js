import { push } from 'connected-react-router';
import * as api from '../api';
import ActionTypes from '../actionTypes';

const loginRequest = (user, password) => ({
  type: ActionTypes.LOGIN_REQUEST,
  request: api.loginRequest(user, password)
});

const logoutRequest = () => ({
  type: ActionTypes.LOGOUT_REQUEST,
  request: api.logoutRequest()
});

export default {
  push,
  loginRequest,
  logoutRequest
};
