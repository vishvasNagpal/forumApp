// @flow

import { combineReducers } from 'redux';
import commonReducer from './commonReducer';
import checklistReducer from './checklistReducer';

export default combineReducers({
  commonReducer,
  checklistReducer,
});
