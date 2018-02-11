// @flow

import { createStore, applyMiddleware, compose } from 'redux';
// import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import reducers from '../reducers';

export default function configureStore(initialState: ? Object): Store {
  const logger = createLogger({ collapsed: false });
  const middleware = [reduxImmutableStateInvariant(), logger];
  // if (__DEV__) {
  //   middleware.concat([reduxImmutableStateInvariant()]);
  // }
  /* eslint-disable no-undef */
  const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;
  /* eslint-enable no-undef */
  const store = createStore(
    reducers,
    initialState,
    composeEnhancers(applyMiddleware(...middleware))
  );
  return store;
}
