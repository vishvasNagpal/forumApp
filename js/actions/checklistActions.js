// @flow

import Types from './Types';

const setFormData = (formData: Object) => ({
  type: Types.SET_FORM_DATA,
  formData,
});

export {
  setFormData,
};
