import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import Session from 'containers/Login/reducers';
import Main from 'containers/Main/reducers';
import App from 'containers/App/reducers';

export default history => combineReducers({
  App, Session, Main, router: connectRouter(history) 
});
