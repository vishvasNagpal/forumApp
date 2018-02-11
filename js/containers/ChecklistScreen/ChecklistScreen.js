// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import {
  View,
} from 'react-native';
import Style from './Styles';
import { CheckList } from '../../components';

class ChecklistScreen extends Component<Props> {
  static propTypes = {
  };
  render() {
    return (
      <View style={Style.container}>
        <CheckList />
      </View>
    );
  }
}

function mapStateToProps() {
  return {};
}
export default connect(mapStateToProps)(ChecklistScreen);
