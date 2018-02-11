// @flow

import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import PropTypes from 'prop-types';
import Styles from './Styles';
import { ImagesPath } from '../../theme';

class ActionsList extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
  }
  onPress() {
    this.props.navigation.navigate('OptionsList', { title: 'My Forms' });
  }
  renderRow = (item: Object) => (
    <TouchableOpacity onPress={() => this.onPress()}>
      <View style={Styles.row}>
        <Text style={Styles.rowText}>{item.key}</Text>
        <Image resizeMode="contain" style={Styles.image} source={ImagesPath[item.image]} />
      </View>
    </TouchableOpacity>
  );
  render() {
    return (
      <FlatList
        data={[{ id: 1, key: 'My Forms', image: 'myFormsIcon' }]}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (this.renderRow(item))}
      />
    );
  }
}

export default ActionsList;
