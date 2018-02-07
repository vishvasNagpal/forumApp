// @flow
import { StackNavigator } from 'react-navigation';
import Home from '../containers/HomeScreen';
import OptionsList from '../containers/OptionsListScreen';

// eslint-disable-next-line
const HomeScreen = StackNavigator({
  Home: {
    screen: Home,
    path: '/Home',
    navigationOptions: {
      title: 'Home',
    },
  },
  OptionsList: {
    screen: OptionsList,
    path: '/OptionsList',
    navigationOptions: {
      title: 'Options',
    },
  },
});

export default HomeScreen;
