import loginActions from 'containers/Login/actions';
import LogoAPI from '../api';
import ActionTypes from '../actionTypes';

const getLogo = () => ({
  type: ActionTypes.LOGO_REQUEST,
  request: LogoAPI.fetchLogo()
});

export default {
  getLogo,
  logoutRequest: loginActions.logoutRequest
};
