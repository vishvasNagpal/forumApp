// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
} from 'react-native';
import Style from './Styles';
import { ActionsList } from '../../components';

class HomeScreen extends Component<Props> {
  render() {
    return (
      <View style={Style.container}>
        <ActionsList navigation={this.props.navigation} />
      </View>
    );
  }
}

function mapStateToProps() {
  return {};
}
export default connect(mapStateToProps)(HomeScreen);
