/* eslint-disable no-undef, no-underscore-dangle, global-require */
import { createLogger } from 'redux-logger';
import reduxReqMiddleware from 'redux-req-middleware';
import { createStore, compose, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';

import base from 'base';
import createRootReducer from '../reducers';

const configureStore = (history, initialState) => {
  let composeEnhancer = compose;
  let middleware;

  if (base.env === 'development') {
    middleware = applyMiddleware(
      createLogger({ level: 'info', collapsed: true }),
      routerMiddleware(history),
      reduxReqMiddleware()
    );
    composeEnhancer = typeof window !== 'undefined' && (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose);
  } else {
    middleware = applyMiddleware(routerMiddleware(history), reduxReqMiddleware());
  }

  const enhancer = composeEnhancer(middleware);
  const store = createStore(createRootReducer(history), initialState, enhancer);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default;

      store.replaceReducer(nextRootReducer(history));
    });
  }

  return store;
};

export default configureStore;
