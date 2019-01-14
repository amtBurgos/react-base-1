import { combineReducers } from 'redux';
import Session from 'containers/Login/reducers';
import Main from 'containers/Main/reducers';
import App from 'containers/App/reducers';

export default combineReducers({
  App, Session, Main 
});
