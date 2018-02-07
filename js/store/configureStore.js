// @flow

import { createStore } from 'redux';
// import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import reducers from '../reducers';

export default function configureStore(initialState: ? Object): Store {
  const middleware = [];
  const logger = createLogger({ collapsed: false });
  if (__DEV__) {
    middleware.concat([reduxImmutableStateInvariant(), logger]);
  }
  const store = createStore(
    reducers,
    initialState
  );
  return store;
}
