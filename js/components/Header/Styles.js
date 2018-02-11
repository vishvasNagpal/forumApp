// @flow

import { StyleSheet } from 'react-native';
import { Colors } from '../../theme';
import Fonts from '../../theme/Fonts';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.bgPrimary,
    padding: 10,
    height: 65,
    position: 'relative',
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 65,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: 1,
  },
  textLogo: {
    flexDirection: 'row',
  },
  logo: {
    width: 150,
  },
  logoLemon: {
    width: 30,
    height: 30,
  },
  buttonWrapper: {
    position: 'relative',
    zIndex: 2,
    alignItems: 'center',
    height: 65,
    paddingVertical: 15,
  },
  button: {
    width: 30,
    height: 30,
  },
  headerText: {
    fontSize: Fonts.fontSize.h3,
    color: Colors.charcolBlack,
  },
});
