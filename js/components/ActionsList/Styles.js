// @flow

import { StyleSheet } from 'react-native';
import { Colors } from '../../theme';

export default StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: Colors.borderColor,
    paddingVertical: 10,
  },
  rowText: {
    fontSize: 18,
    color: Colors.charcolBlack,
    padding: 10,
  },
  image: {
    width: 30,
    height: 30,
  },
});
