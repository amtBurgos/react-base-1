import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import User from 'containers/Login/reducers';
import Main from 'containers/Main/reducers';

export default history => combineReducers({ router: connectRouter(history), User, Main });
