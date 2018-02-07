// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Style from './Styles';

class HomeScreen extends Component<Props> {
  onPress() {
    this.props.navigation.navigate('OptionsList');
  }
  render() {
    return (
      <View style={Style.container}>
        <TouchableOpacity onPress={() => this.onPress()}>
          <Text style={Style.row}>
            My Forms
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

function mapStateToProps() {
  return {};
}
export default connect(mapStateToProps)(HomeScreen);
