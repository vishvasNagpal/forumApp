// @flow

import React, { Component } from 'react';
import Spinner from 'react-native-spinkit';
import PropTypes from 'prop-types';
import { View } from 'react-native';

class Loader extends Component {
  static propTypes = {
    color: PropTypes.string,
    size: PropTypes.number,
    type: PropTypes.string,
  };

  static defaultProps = {
    color: '#3866df',
    size: 37,
    type: 'Pulse',
  };

  render() {
    const container = {
      flex: 1, justifyContent: 'center', alignItems: 'center',
    };
    return (
      <View style={container}>
        <Spinner type={this.props.type} color={this.props.color} size={this.props.size} />
      </View>
    );
  }
}

export default Loader;
