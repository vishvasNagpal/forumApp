// @flow

import { createReducer } from 'reduxsauce';
import Types from '../actions/Types';

export const INITIAL_STATE = {
  networkError: false,
};

export const isNetworkError = (state: Object = INITIAL_STATE) => ({
  ...state,
  networkError: false,
});

const ACTION_HANDLERS = {
  [Types.NETWORK_ERROR]: isNetworkError,
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
