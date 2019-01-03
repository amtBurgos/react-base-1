import { push } from 'connected-react-router';
import loginActions from 'containers/Login/actions';
import LogoAPI from '../api';
import ActionTypes from '../actionTypes';

const getLogo = () => ({
  type: ActionTypes.LOGO_REQUEST,
  request: LogoAPI.fetchLogo()
});

export default {
  push,
  getLogo,
  logoutRequest: loginActions.logoutRequest
};
