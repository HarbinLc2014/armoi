import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

import Login from './src/Login';
import Main from './src/Main';
import Setting from './src/Setting';
import FittingRoom from './src/FittingRoom';

export default class App extends React.Component {
  render() {
    const MainNavigator = TabNavigator(
      {
      login: {screen: Login},
      main: {
                  screen: TabNavigator({
                    home: { screen: StackNavigator({
                      homepage: { screen: Main }
                    }) },
                    fittingRoom: { screen: StackNavigator({
                      fittingMain: { screen: FittingRoom }
                    }) },
                    setting: { screen: StackNavigator({
                      settingMain: { screen: Setting }
                    }) },
                  })
            },

    },
    {
         navigationOptions: {
          tabBarVisible: false
         },
       }
  );
    return (
      <MainNavigator />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
