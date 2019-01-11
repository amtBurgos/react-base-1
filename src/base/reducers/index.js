import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import Session from 'containers/Login/reducers';
import Main from 'containers/Main/reducers';

export default history => combineReducers({ router: connectRouter(history), Session, Main });
