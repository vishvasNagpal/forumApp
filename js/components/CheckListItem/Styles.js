// @flow

import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../theme';

export default StyleSheet.create({
  container: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: Colors.borderColor,
  },
  headText: {
    fontSize: Fonts.fontSize.h4,
    color: Colors.charcolBlack,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 5,
  },
  actionWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 10,
  },
  actionImage: {
    width: 30,
    height: 30,
  },
  actionLabel: {
    paddingLeft: 15,
    fontSize: Fonts.fontSize.xxlg,
    color: Colors.charcolBlack,
  },
});
