// @flow

import { createReducer } from 'reduxsauce';
import Types from '../actions/Types';

export const INITIAL_STATE = {
  checklist: {},
};

export const setFormData = (state: Object = INITIAL_STATE, action: Object) => ({
  ...state,
  checklist: action.formData,
});

const ACTION_HANDLERS = {
  [Types.SET_FORM_DATA]: setFormData,
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
