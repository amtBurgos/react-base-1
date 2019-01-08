import { combineReducers } from 'redux';
import Main from 'containers/Main/reducers';
import App from 'containers/App/reducers';

export default combineReducers({ App, Main });
