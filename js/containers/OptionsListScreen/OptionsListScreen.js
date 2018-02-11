// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  View,
} from 'react-native';
import Style from './Styles';
import { OptionsList } from '../../components';

class OptionsListScreen extends Component<Props> {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
  };
  render() {
    return (
      <View style={Style.container}>
        <OptionsList navigation={this.props.navigation} />
      </View>
    );
  }
}

function mapStateToProps() {
  return {};
}
export default connect(mapStateToProps)(OptionsListScreen);
