// @flow

import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import PropTypes from 'prop-types';
import Styles from './Styles';
import { ImagesPath } from '../../theme';

class CheckListItem extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
    onItemSelect: PropTypes.func.isRequired,
  }
  constructor() {
    super();
    this.state = {
      radioYes: this.props.item.radioYes,
      radioNo: this.props.item.radioNo,
    };
  }
  onActionPress(yes: boolean) {
    let yess = false;
    let no = false;
    if (yes) {
      yess = true;
      no = false;
      this.setState({
        radioYes: true,
        radioNo: false,
      });
    } else {
      yess = false;
      no = true;
      this.setState({
        radioYes: false,
        radioNo: true,
      });
    }
    this.props.onItemSelect(this.props.item.id, yess, no);
  }
  render() {
    return (
      <View style={Styles.container}>
        <Text style={Styles.headText}>{this.props.item.key}</Text>
        <View style={Styles.actions}>
          <TouchableOpacity
            onPress={() => this.onActionPress(true)}
          >
            <View style={Styles.actionWrapper}>
              <Image
                source={this.state.radioYes ? ImagesPath.radioSelected : ImagesPath.radioUnSelected}
                resizeMode="contain"
                style={Styles.actionImage}
              />
              <Text style={Styles.actionLabel}>Pass</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.onActionPress(false)}
          >
            <View style={Styles.actionWrapper}>
              <Image
                source={this.state.radioNo ? ImagesPath.radioSelected : ImagesPath.radioUnSelected}
                resizeMode="contain"
                style={Styles.actionImage}
              />
              <Text style={Styles.actionLabel}>Fail</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}


export default CheckListItem;
