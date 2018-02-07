// @flow

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { AppRegistry } from 'react-native';
import App from './js/App';
import configureStore from './js/store/configureStore';

const store = configureStore();
class init extends Component {
  constructor() {
    super();
    this.store = store;
  }
  render() {
    return (
      <Provider store={this.store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('FormApp', () => init);
