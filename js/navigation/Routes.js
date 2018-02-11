// @flow
import React from 'react';
import { StackNavigator } from 'react-navigation';
import Home from '../containers/HomeScreen';
import OptionsList from '../containers/OptionsListScreen';
import Checklist from '../containers/ChecklistScreen';
import { Header } from '../components/';

// eslint-disable-next-line
const HomeScreen = StackNavigator({
  Home: {
    screen: Home,
    path: '/Home',
    navigationOptions: ({ navigation }) => ({
      header: <Header navigation={navigation} />,
    }),
  },
  OptionsList: {
    screen: OptionsList,
    path: '/OptionsList',
    navigationOptions: ({ navigation }) => ({
      header: <Header backEnabled navigation={navigation} />,
    }),
  },
  Checklist: {
    screen: Checklist,
    path: '/Checklist',
    navigationOptions: ({ navigation }) => ({
      header: <Header homeEnabled uploadEnabled navigation={navigation} />,
    }),
  },
});

export default HomeScreen;
