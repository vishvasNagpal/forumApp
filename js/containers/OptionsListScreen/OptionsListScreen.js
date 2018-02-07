// @flow

import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';
import Style from './Styles';

class OptionsListScreen extends Component<Props> {
  render() {
    return (
      <View style={Style.container}>
        <Text style={Style.row}>
          Strait Sanitation Checklist
        </Text>
      </View>
    );
  }
}

export default OptionsListScreen;
