// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  Alert,
} from 'react-native';
import PropTypes from 'prop-types';
import Styles from './Styles';
import Images from '../../theme/ImagesPath';

class Header extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    backEnabled: PropTypes.bool,
    homeEnabled: PropTypes.bool,
    uploadEnabled: PropTypes.bool,
  }
  goBack() {
    this.props.navigation.goBack();
  }
  onPressHome() {
    Alert.alert(
      'Are you sure you want to exit this form?',
      '',
      [
        { text: 'Yes', onPress: () => this.navigateToHome() },
        { text: 'No', onPress: () => (null) },
      ]
    );
  }
  navigateToHome() {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Home' })],
    });
    this.props.navigation.dispatch(resetAction);
  }
  upload() {
    Alert.alert(
      'Form Submitted',
      '',
      [
        { text: 'OK', onPress: () => this.navigateToHome() },
      ]
    );
  }
  render() {
    const navState = this.props.navigation.state;
    const param = navState.params;
    const title = navState && param && param.title;
    return (
      <View style={Styles.container}>
        <View style={Styles.headerWrapper}>
          {
            this.props.backEnabled ?
              <View style={Styles.buttonWrapper}>
                <TouchableOpacity onPress={() => this.goBack()}>
                  <Image source={Images.headerBack} resizeMode="contain" style={Styles.button} />
                </TouchableOpacity>
              </View> :
              null
          }
          {
            this.props.homeEnabled ?
              <View style={Styles.buttonWrapper}>
                <TouchableOpacity onPress={() => this.onPressHome()}>
                  <Image source={Images.home} resizeMode="contain" style={Styles.button} />
                </TouchableOpacity>
              </View> :
              null
          }
          {
            this.props.uploadEnabled ?
              <View style={Styles.buttonWrapper}>
                <TouchableOpacity onPress={() => this.upload()}>
                  <Image source={Images.upload} resizeMode="contain" style={Styles.button} />
                </TouchableOpacity>
              </View> :
              null
          }
          {
            <View style={Styles.logoWrapper}>
              {
                title ?
                  <View style={Styles.textLogo}>
                    <Text style={Styles.headerText}>{title}</Text>
                  </View> :
                  <Image source={Images.logo} resizeMode="contain" style={Styles.logo} />
              }
            </View>
          }
        </View>
      </View>
    );
  }
}

Header.defaultProps = {
  backEnabled: false,
  homeEnabled: false,
  uploadEnabled: false,
};

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Header);

