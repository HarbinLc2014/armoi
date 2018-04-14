import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';
import { Ionicons, Foundation, Entypo, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import Login from './src/Login';
import ShopCart from './src/ShopCart';
import Main from './src/Main';
import Setting from './src/Setting';
import FittingRoom from './src/FittingRoom';
import Menu from './src/Menu';
import SideMenu from './src/component/SideMenu';

export default class App extends React.Component {
  render() {
    const MainNavigator = TabNavigator(
      {
  //    login: {screen: Login},
      main: {
                  screen: TabNavigator({
                    home: { screen: StackNavigator({
                      homepage: {
                        screen: DrawerNavigator({
                          hpage: {screen: Main, navigationOptions:{
                            drawerIcon: ({tintColor}) => (
                              <FontAwesome name="home" size={20} color={tintColor} />
                            ),
                            drawerLabel: 'Home'
                          }},
                          shopcart: {screen: ShopCart, navigationOptions:{
                            drawerIcon: ({tintColor}) => (
                              <Foundation name="shopping-cart" size={20} color={tintColor} />
                            ),
                            drawerLabel: 'Shopcart'
                          }},
                          settingpage: {screen: Main, navigationOptions:{
                            drawerIcon: ({tintColor}) => (
                              <FontAwesome name="cog" size={20} color={tintColor} />
                            ),
                            drawerLabel: 'Settings'
                          }},
                          preference: {screen: Main, navigationOptions:{
                            drawerIcon: ({tintColor}) => (
                              <Foundation name="social-myspace" size={20} color={tintColor} />
                            ),
                            drawerLabel: 'Preference'
                          }}
                        },
                        {
                            contentComponent: SideMenu,
                            drawerWidth:225,
                            drawerPosition:'left',
                        }
                      )
                       }
                    }),
                    navigationOptions: {
                      tabBarIcon: ({tintColor}) => (
                        <FontAwesome name="home" size={30} color={tintColor} />
                      ),
                      title: 'Home'
                    }
                   },
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
